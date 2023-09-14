<?php

use DI\Container;
use Rakit\Validation\Validator;

function getTimberComponentData($language)
{
    $lengthsOptions = (getOption('stipane_drivi-delky', $language) ?? ['content' => ['data' => []]])['content']['data'];
    $piecesOptions = (getOption('stipane_drivi-mnozstvi', $language) ?? ['content' => ['data' => []]])['content']['data'];
    $typeOfWoodOptions = (getOption('stipane_drivi-dreviny', $language) ?? ['content' => ['data' => []]])['content']['data'];
    $unitOptions = (getOption('stipane_drivi-jednotky', $language) ?? ['content' => ['data' => []]])['content']['data'];

    return [
        'form' => [
            'options' => [
                'typeOfWood' => $typeOfWoodOptions,
                'lengths' => $lengthsOptions,
                'pieces' => $piecesOptions,
                'unit' => $unitOptions,
            ],
            'text' => [
                'cs' => [
                    'title' => 'Objednávkový formulář štípaného dříví',
                    'name' => 'Jméno',
                    'address' => 'Adresa Dodání',
                    'note' => 'Poznámka',
                    'send' => 'Odeslat',
                    'thankYou' => 'Děkujeme za Váš zájem. Brzo Vás budeme kontaktovat.',
                    'options' => [
                        'default' => 'Vyberte',
                        'typeOfWood' => 'Dřevina',
                        'lengths' => 'Délka',
                        'pieces' => 'Množství',
                        'unit' => 'Jednotky',
                    ],
                    'gdpr' => [
                        'consent' => "Souhlasím se zpracováním údajů"
                    ]
                ],
                // TODO: translate
                'en' => [
                  'title' => 'Order form for chopped wood',
                  'name' => 'Name',
                  'address' => 'Your address',
                  'note' => 'Notes',
                  'send' => 'Send',
                  'thankYou' => 'Thank you for your order. We will be contacting you soon with more information.',
                  'options' => [
                      'default' => 'Choose',
                      'typeOfWood' => 'Type of wood',
                      'lengths' => 'Length',
                      'pieces' => 'Count',
                      'unit' => 'Unit',
                  ],
                    'gdpr' => [
                        'consent' => "I consent with GDPR"
                    ]
                ],
            ],
        ],
    ];
}

class ServicesController
{
    use \PromCMS\Core\Controllers\Traits\Model\I18n;

    private Container $container;
    private \PromCMS\Core\Config $config;

    private Validator $schema;

    public function __construct(Container $container)
    {
        $this->container = $container;
        $this->config = $container->get(\PromCMS\Core\Config::class);
        $this->languageConfig = $this->config->i18n;
        $this->schema = new Validator();
    }

    function entryPage(\Psr\Http\Message\ServerRequestInterface $request, \Psr\Http\Message\ResponseInterface $response, array $routeArgs): \Psr\Http\Message\ResponseInterface
    {
        $language = $this->getCurrentLanguage($request, $routeArgs);
        $twig = $this->container->get(\Slim\Views\Twig::class);

        $service = \Services::setLanguage($language)
            ->where(getMultilangField('slug', $routeArgs['service_slug'], $this->config->i18n->languages))
            ->getOne();

        if (!$service) {
            $twig->render($response, '@modules:katr/pages/404.twig', []);

            return $response->withStatus(404);
        }

        $page = $service->getData();

        $pageAsJson = json_encode(repairBlockContent($page));
        if (str_includes($pageAsJson, 'objednavka-stipaneho-drivi-formular')) {
            $page['stipaneDrivi'] = getTimberComponentData($language);
        }

        $twig->render(
            $response,
            '@modules:katr/pages/sluzby/[service-slug].twig',
            array_merge(getDefaultLayoutData($language, $request, $this->container), [
                'data' => repairBlockContent($page),
            ]),
        );

        return $response;
    }

    function slicedTimber_POST(\Psr\Http\Message\ServerRequestInterface $request, \Psr\Http\Message\ResponseInterface $response, array $routeArgs): \Psr\Http\Message\ResponseInterface
    {
        $data = $request->getParsedBody() ?? [];
        $componentPath = '@modules:katr/dynamic-blocks/objednavka-stipaneho-drivi-formular.twig';
        $language = $this->getCurrentLanguage($request, $routeArgs);
        /**
         * @type PHPMailer\PHPMailer\PHPMailer $emailService
         */
        $emailService = $this->container->get('email');
        $twig = $this->container->get(\Slim\Views\Twig::class);
        $componentData = [
            'language' => $language,
            'stipaneDrivi' => getTimberComponentData($language),
        ];

        $validateResult = $this->schema->validate($data, [
          'name' => 'required|regex:/\s/',
          'address' => 'required|min:6',
          'telephone' => 'required|min:9',
          'email' => 'email|required',
          // 'note' => '',
          'type-of-wood' => 'required',
          'length-of-wood' => 'required',
          'pieces-of-wood' => 'required',
          'unit-of-wood' => 'required',
          'h-captcha-response' => 'required',
        ], $language == "cs" ? [
          'required' => 'Požadováno',
          'min' => 'Minimálně :min znaků',
          'email' => 'Musí být validní emailová adresa',
          'name:regex' => 'Celé jméno, prosím',
        ] : []);
        $schemaFailed = $validateResult->fails();
        $captchaFailed = isset($data['h-captcha-response']) ? checkCaptcha($data['h-captcha-response']) : false;

        if ($schemaFailed || $captchaFailed) {
            $twig->render(
                $response,
                $componentPath,
                array_merge($componentData, [
                    'stipaneDrivi' => array_merge($componentData["stipaneDrivi"], [
                      "form" => array_merge($componentData["stipaneDrivi"]['form'], [
                        'defaultValues' => $data,
                        'errorMessages' => array_merge($validateResult->errors()->firstOfAll(), $captchaFailed ? ['h-captcha-response' => 'Špatná captcha'] : []),
                      ])
                    ]),
                ]),
            );

            return $response->withStatus(200);
        }

        $emailService->isHtml();
        $emailService->addAddress('stipanedrivi@katr.cz');
        $emailService->Subject = 'Nová objednávka štípaného dříví na katr.cz';
        $emailService->Body = $twig->getEnvironment()->render('@modules:katr/email/timber-form.twig', [ "data" => $data ]);
        $emailService->send();

        $twig->render($response, $componentPath, array_merge($componentData, [
          "success" => true
        ]));

        return $response;
    }
}
