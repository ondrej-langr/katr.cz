<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$cachedHeroImageUrl;
$container = $app->getContainer();
$emailService = $container->get('email');
$twig = $container->get('twig');
$allServices = \Services::all()->toArray();
$settings = \Settings::orderBy('id', 'ASC')
  ->get()
  ->toArray();

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

/**
 * basic getting of services with caching
 */
function getServices()
{
  global $allServices;

  if (!$allServices) {
    $allServices = \Services::all()->toArray();
  }

  return $allServices;
}

/**
 * basic getting of services with caching
 */
function getSettings()
{
  global $settings;

  if (!$settings) {
    $settings = \Settings::all()->toArray();
  }

  return $settings;
}

function getSetting($id)
{
  $allSettings = getSettings();

  foreach ($allSettings as $key => $val) {
    if ($val['name'] === $id) {
      return $val;
    }
  }
  return null;
}

function getDefaultHeroImageUrl()
{
  global $cachedHeroImageUrl;

  if (!$cachedHeroImageUrl) {
    $imageId = getSetting('default_hero_image')['content']['data'];
    $cachedHeroImageUrl = $imageId
      ? \Files::find($imageId)->toArray()['path']
      : 'assets/images/header-bg2.jpg';
  }

  return $cachedHeroImageUrl;
}

/**
 * render helper
 */
function render(string $path, array $data)
{
  global $twig;

  $layoutBase = [
    'baseUrl' => PROM_URL_BASE ? PROM_URL_BASE : '/',
    'services' => getServices(),
    'default_hero_image' => getDefaultHeroImageUrl(),
    'footer' => [
      'contacts' => getSetting('footer_contacts')['content']['data'],
      'fakturace' => getSetting('footer_secret_items')['content']['data'],
      'address' => getSetting('footer_address'),
      'hot_list' => getSetting('footer_hot_list'),
      'docs' => getSetting('footer_docs_list'),
    ],
    'allPages' => \Pages::onlyPublished()
      ->where('id', '!=', 2)
      ->get()
      ->toArray(),
  ];

  return $twig->render(
    $path,
    array_merge($layoutBase, [
      'data' => $data,
    ])
  );
}

// MAIN PAGE
$router->get('/', function (
  ServerRequestInterface $request,
  ResponseInterface $response
) {
  $posts = \Posts::orderByDesc('created_at')
    ->onlyPublished()
    ->limit(3)
    ->get()
    ->toArray();

  $opportunities = \Positions::limit(3)
    ->get()
    ->toArray();

  $response->getBody()->write(
    render('pages/landing-page.twig', [
      'seoTitle' => 'Hlavní stránka',
      'posts' => $posts,
      'opportunities' => $opportunities,
      'cols' => [
        getSetting('main_page_first_col')['content']['data'],
        getSetting('main_page_second_col')['content']['data'],
        getSetting('main_page_third_col')['content']['data'],
      ],
      'title' => getSetting('main_page_title')['content']['data'],
      'description' => getSetting('main_page_description')['content']['data'],
      'services' => [
        'title' => getSetting('main_page_about_title')['content']['data'],
        'description' => getSetting('main_page_about_text')['content']['data'],
      ],
    ])
  );

  return $response;
});

// BLOG
$router->get('/blog', function (
  ServerRequestInterface $request,
  ResponseInterface $response
) {
  $posts = \Posts::orderByDesc('created_at')
    ->onlyPublished()
    ->get()
    ->toArray();

  $response->getBody()->write(
    render('pages/blog/index.twig', [
      'posts' => $posts,
    ])
  );

  return $response;
});

$router->get('/blog/{post_slug}', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  try {
    $postData = \Posts::where('slug', $args['post_slug'])
      ->onlyPublished()
      ->firstOrFail()
      ->toArray();
  } catch (\Exception $e) {
    $response->getBody()->write(render('pages/404.twig', []));

    return $response->withStatus(404);
  }

  $response
    ->getBody()
    ->write(
      render('pages/blog/[blog-slug].twig', repairBlockContent($postData))
    );

  return $response;
});

// GALLERY
$router->get('/galerie', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $content = repairBlockContent(
    \Pages::where('id', 2)
      ->first()
      ->toArray()
  );

  if ($content['content']['blocks']) {
    $content['content']['blocks'] = array_filter(
      $content['content']['blocks'],
      function ($item) {
        return $item['type'] === 'gallery';
      }
    );
  }

  $response->getBody()->write(render('pages/galerie.twig', $content));

  return $response;
});

// KARIERA
$router->get('/kariera', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $opportunities = array_map(function ($opportu) {
    return repairBlockContent($opportu);
  }, \Positions::all()->toArray());

  $response->getBody()->write(render('pages/kariera.twig', $opportunities));

  return $response;
});

// CONTACTS
$router->map(['GET', 'POST'], '/kontakt', function (
  ServerRequestInterface $request,
  ResponseInterface $response
) use ($emailService, $twig) {
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

      // IF capcha is correct then proceed
      if ($captchaResponseData->success) {
        $emailService->isHtml();
        $emailService->addAddress('dotazy@katr.cz');
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

  $contacts = \Contacts::all()->toArray();

  $groupedContacts = [];

  foreach ($contacts as $contact) {
    $category = $contact['category'];

    if (!isset($groupedContacts[$category]['label'])) {
      $groupedContacts[$category]['label'] = $category;
    }

    $groupedContacts[$category]['contacts'][] = $contact;
  }

  $response->getBody()->write(
    render('pages/kontakt.twig', [
      'contactGroups' => $groupedContacts,
      'emailSent' => isset($params['success']),
      'captchafail' => isset($params['captchafail']),
      'emailSuccess' =>
        isset($params['success']) && $params['success'] === 'true',
    ])
  );

  return $response;
});

// SERVICES
$router->get('/sluzby/{service_slug}', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $service = \Services::where('slug', $args['service_slug'])->first();

  if (!$service) {
    $response->getBody()->write(render('pages/404.twig', []));

    return $response->withStatus(404);
  }

  $response
    ->getBody()
    ->write(
      render(
        'pages/sluzby/[service-slug].twig',
        repairBlockContent($service->toArray())
      )
    );

  return $response;
});

$router->get('/{page_slug}', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  try {
    $page = \Pages::onlyPublished()
      ->where('slug', $args['page_slug'])
      ->firstOrFail()
      ->toArray();
  } catch (\Exception $e) {
    $response->getBody()->write(render('pages/404.twig', []));

    return $response->withStatus(404);
  }

  $response
    ->getBody()
    ->write(
      render('pages/sluzby/[service-slug].twig', repairBlockContent($page))
    );

  return $response;
});
