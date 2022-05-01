<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$container = $app->getContainer();
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

$imageId = getSetting('default_hero_image')['content']['data'];
$heroImageUrl = $imageId ? \Files::find($imageId)->toArray()['path'] : '';

echo 'Imageid: ' . $imageId;

/**
 * render helper
 */
function render(string $path, array $data)
{
  global $twig, $heroImageUrl;

  $layoutBase = [
    'baseUrl' => PROM_URL_BASE ? PROM_URL_BASE : '/',
    'services' => getServices(),
    'default_hero_image' => $heroImageUrl ?? 'assets/images/header-bg2.jpg',
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
$router->get('/kontakt', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
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
  $service = \Services::where('slug', $args['service_slug'])
    ->first()
    ->toArray();

  if (!$service) {
    $response->getBody()->write(render('pages/404.twig', []));

    return $response->withStatus(404);
  }

  $response
    ->getBody()
    ->write(
      render('pages/sluzby/[service-slug].twig', repairBlockContent($service))
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
