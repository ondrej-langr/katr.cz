<?php

use App\Database\Query;
use Slim\Routing\RouteCollectorProxy as Router;
use Psr\Http\Message\ResponseInterface;
use App\Services\ImageService;
use Psr\Http\Message\ServerRequestInterface;
use Slim\App;

function repairBlockContent($item)
{
  if (is_string($item['content'])) {
    return json_decode(
      json_encode(
        array_merge($item, [
          'content' => json_decode($item['content']),
        ])
      ),
      true
    );
  } else {
    return $item;
  }
}

function connectGalleries($content = []): array
{
  if (isset($content['content']) && isset($content['content']['blocks'])) {
    $bigGalleryPocket = [];
    $newBlocks = [];

    foreach ($content['content']['blocks'] as $key => $block) {
      if ($block['type'] === 'gallery') {
        $bigGalleryPocket[] = $block;
      } else {
        if (count($bigGalleryPocket) > 1) {
          $blockValue = [
            'type' => 'big-gallery',
            'data' => $bigGalleryPocket,
          ];
        } elseif (count($bigGalleryPocket) === 1) {
          $blockValue = $bigGalleryPocket[0];
        } else {
          $blockValue = $block;
        }
        $newBlocks[] = $blockValue;
        $bigGalleryPocket = [];
      }

      // If we end with gallery we have to attach that gallery too
      if (
        $key === count($content['content']['blocks']) - 1 &&
        count($bigGalleryPocket)
      ) {
        if (count($bigGalleryPocket) > 1) {
          $blockValue = [
            'type' => 'big-gallery',
            'data' => $bigGalleryPocket,
          ];
        } else {
          $blockValue = $bigGalleryPocket[0];
        }

        $newBlocks[] = $blockValue;
      }
    }

    $content['content']['blocks'] = $newBlocks;
  }

  return $content;
}

return function (App $app, Router $router) {
  $container = $app->getContainer();
  $emailService = $container->get('email');
  /**
   * @var ImageService
   */
  $imageService = $container->get('image-service');
  /**
   * @var \App\Services\FileService
   */
  $fileService = $container->get('file-service');
  $twig = $container->get('twig');
  $allServices = \Services::getMany();
  $settings = \Settings::orderBy(['id' => 'asc'])->getMany();

  $getSetting = function ($id) use ($settings) {
    foreach ($settings as $val) {
      if ($val['name'] === $id) {
        return json_decode(json_encode($val), true);
      }
    }
    return null;
  };

  $heroImageId = $getSetting('default_hero_image')['content']['data'];
  $heroImageUrl = 'assets/images/header-bg2.jpg';
  if ($heroImageId) {
    $fileInfo = $fileService->getById($heroImageId);
    $heroImageUrl = $imageService->getProcessed($fileInfo->getData())['src'];
  }

  $getMultilangField = function ($fieldName, $value) use ($container) {
    $final = [];
    foreach ($container->get('config')['i18n']['languages'] as $language) {
      $final[] = [
        Query::$TRANSLATIONS_FIELD_NAME . ".$language.$fieldName",
        '=',
        $value,
      ];
      $final[] = 'OR';
    }

    array_pop($final);

    return $final;
  };

  /**
   * render helper
   */
  $render = function (string $path, array $data) use (
    $twig,
    $container,
    $allServices,
    $getSetting,
    $heroImageUrl
  ) {
    $layoutBase = [
      'baseUrl' => $container->get('config')['app']['url'],
      'services' => $allServices,
      'default_hero_image' => $heroImageUrl,
      'footer' => [
        'contacts' => $getSetting('footer_contacts')['content']['data'],
        'fakturace' => $getSetting('footer_secret_items')['content']['data'],
        'address' => $getSetting('footer_address'),
        'hot_list' => $getSetting('footer_hot_list'),
        'docs' => $getSetting('footer_docs_list'),
      ],
      'allPages' => \Pages::where([
        ['showInMenu', '=', true],
        ['is_published', '=', true],
      ])
        ->orderBy(['order' => 'asc', 'id' => 'asc'])
        ->getMany(),
    ];

    return $twig->render(
      $path,
      array_merge($layoutBase, [
        'data' => $data,
      ])
    );
  };

  // MAIN PAGE
  $router->get('/', function (
    ServerRequestInterface $request,
    ResponseInterface $response
  ) use ($render, $getSetting) {
    $posts = \Posts::where(['is_published', '=', true])
      ->orderBy(['created_at' => 'desc'])
      ->limit(3)
      ->getMany();

    $opportunities = \Positions::limit(3)->getMany();

    $response->getBody()->write(
      $render('pages/landing-page.twig', [
        'seoTitle' => 'Hlavní stránka',
        'posts' => $posts,
        'opportunities' => $opportunities,
        'cols' => [
          $getSetting('main_page_first_col')['content']['data'],
          $getSetting('main_page_second_col')['content']['data'],
          $getSetting('main_page_third_col')['content']['data'],
        ],
        'title' => $getSetting('main_page_title')['content']['data'],
        'description' => $getSetting('main_page_description')['content'][
          'data'
        ],
        'about' => [
          'content' => $getSetting('main_page_about')['content']['data'],
        ],
        'blog_list' => [
          'before' => $getSetting('main_page_blog_list_before')['content'][
            'data'
          ],
          'after' => $getSetting('main_page_blog_list_after')['content'][
            'data'
          ],
          'image' => $getSetting('main_page_blog_list_image')['content'][
            'data'
          ],
        ],
        'positions' => [
          'before' => $getSetting('main_page_positions_before')['content'][
            'data'
          ],
          'after' => $getSetting('main_page_positions_after')['content'][
            'data'
          ],
          'image' => $getSetting('main_page_positions_image')['content'][
            'data'
          ],
        ],
      ])
    );

    return $response;
  });

  // BLOG
  $router->get('/blog/{post_slug}', function (
    ServerRequestInterface $request,
    ResponseInterface $response,
    $args
  ) use ($render, $getMultilangField) {
    try {
      $postData = \Posts::where(
        array_merge(
          [['is_published', '=', true]],
          $getMultilangField('slug', $args['post_slug'])
        )
      )
        ->getOne()
        ->getData();
    } catch (\Exception $e) {
      $response->getBody()->write($render('pages/404.twig', []));

      return $response->withStatus(404);
    }

    $response
      ->getBody()
      ->write(
        $render('pages/blog/[blog-slug].twig', repairBlockContent($postData))
      );

    return $response;
  });

  // KARIERA
  $router->get('/kariera', function (
    ServerRequestInterface $request,
    ResponseInterface $response,
    $args
  ) use ($render, $getSetting) {
    $opportunities = array_map(function ($opportu) {
      return repairBlockContent($opportu);
    }, \Positions::getMany());

    $response->getBody()->write(
      $render('pages/kariera.twig', [
        'opportunities' => $opportunities,
        'settings' => [
          'hero_image' => $getSetting('kariera_hero_image')['content']['data'],
        ],
      ])
    );

    return $response;
  });

  // CONTACTS
  $router->map(['GET', 'POST'], '/kontakt', function (
    ServerRequestInterface $request,
    ResponseInterface $response
  ) use ($emailService, $twig, $render, $getSetting) {
    $params = $request->getQueryParams();
    if ($request->getMethod() === 'POST') {
      $data = $request->getParsedBody();

      if (
        !isset($data['h-captcha-response']) ||
        empty($data['h-captcha-response'])
      ) {
        return $response
          ->withStatus(302)
          ->withHeader('Location', '/kontakt?captchafail=true');
      }

      if (
        isset($data['email']) &&
        !empty($data['email']) &&
        isset($data['name']) &&
        !empty($data['name']) &&
        isset($data['message']) &&
        !empty($data['message'])
      ) {
        // Verify recaptcha
        $captchaData = [
          'secret' => $_ENV['SECURITY_HCAPTCHA_SECRET'],
          'response' => $data['h-captcha-response'],
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://hcaptcha.com/siteverify');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($captchaData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $captchaResponse = curl_exec($ch);
        $captchaResponseData = json_decode($captchaResponse);

        // if capcha is correct then proceed
        if ($captchaResponseData->success) {
          $emailService->isHtml();
          $emailService->addAddress('sekretariat@katr.cz');
          $emailService->Subject = 'Nový dotaz v kontaktním formuláři katr.cz';
          $emailService->Body = $twig->render('email/contact-form.twig', [
            'email' => $data['email'],
            'name' => $data['name'],
            'message' => $data['message'],
          ]);

          $emailSuccess = $emailService->send();
        }

        return $response
          ->withStatus(302)
          ->withHeader(
            'Location',
            '/kontakt?success=' . ($emailSuccess ? 'true' : 'false')
          );
      }
    }

    $contacts = \Contacts::getMany();
    $contactPositions = \ContactPositions::orderBy([
      'order' => 'asc',
    ])->getMany();

    $groupedContacts = [];

    foreach ($contactPositions as $contactPosition) {
      $contactPositionName = $contactPosition['name'];
      $groupedContacts[$contactPositionName]['label'] = $contactPositionName;

      foreach (
        array_filter($contacts, function ($item) use ($contactPosition) {
          return intval($item['category']) === intval($contactPosition['id']);
        })
        as $contact
      ) {
        $groupedContacts[$contactPositionName]['contacts'][] = $contact;
      }
    }

    $response->getBody()->write(
      $render('pages/kontakt.twig', [
        'contactGroups' => $groupedContacts,
        'emailSent' => isset($params['success']),
        'captchafail' => isset($params['captchafail']),
        'emailSuccess' =>
          isset($params['success']) && $params['success'] === 'true',
        'settings' => [
          'hero_image' => $getSetting('contact_page_hero_image')['content'][
            'data'
          ],
          'message_success' => $getSetting('contact_message_success')[
            'content'
          ]['data'],
          'message_error' => $getSetting('contact_message_error')['content'][
            'data'
          ],
        ],
      ])
    );

    return $response;
  });

  // SERVICES
  $router->get('/sluzby/{service_slug}', function (
    ServerRequestInterface $request,
    ResponseInterface $response,
    $args
  ) use ($render, $getMultilangField) {
    $service = \Services::where(
      $getMultilangField('slug', $args['service_slug'])
    )->getOne();

    if (!$service) {
      $response->getBody()->write($render('pages/404.twig', []));

      return $response->withStatus(404);
    }

    $response
      ->getBody()
      ->write(
        $render(
          'pages/sluzby/[service-slug].twig',
          repairBlockContent($service->getData())
        )
      );

    return $response;
  });

  $router->get('/{page_slug}', function (
    ServerRequestInterface $request,
    ResponseInterface $response,
    $args
  ) use ($render, $getMultilangField) {
    try {
      $page = \Pages::where(
        array_merge(
          [['is_published', '=', true]],
          $getMultilangField('slug', $args['page_slug'])
        )
      )
        ->getOne()
        ->getData();
    } catch (\Exception $e) {
      $response->getBody()->write($render('pages/404.twig', []));

      return $response->withStatus(404);
    }

    // TODO something more smart?
    if (
      str_includes(
        json_encode(repairBlockContent($page)),
        'blog-page-items-list'
      )
    ) {
      $page['posts'] = \Posts::orderBy(['created_at' => 'asc'])
        ->where(['is_published', '=', true])
        ->getMany();
    }

    $response
      ->getBody()
      ->write(
        $render(
          'pages/sluzby/[service-slug].twig',
          connectGalleries(repairBlockContent($page))
        )
      );

    return $response;
  });
};
