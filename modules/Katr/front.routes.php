<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$container = $app->getContainer();
$twig = $container->get('twig');
$allServices = \Services::all()->toArray();

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
 * render helper
 */
function render(string $path, array $data)
{
  global $twig;

  $layoutBase = [
    'baseUrl' => PROM_URL_BASE ? PROM_URL_BASE : '/',
    'services' => getServices(),
    'allPages' => \Pages::where('id', '!=', 1)
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
  $mainPage = \Pages::where('id', 1)
    ->first()
    ->toArray();

  $blocks = $mainPage['content']['blocks'];
  $cols = $blocks[1]['data']['itemContent'];

  $posts = \Posts::orderByDesc('created_at')
    ->limit(3)
    ->get()
    ->toArray();

  $opportunities = \Positions::limit(3)
    ->get()
    ->toArray();

  $response->getBody()->write(
    render('pages/landing-page.twig', [
      'seoTitle' => $mainPage['title'],
      'posts' => $posts,
      'opportunities' => $opportunities,
      'description' => $mainPage['description'],
      'cols' => array_map(function ($col) {
        return $col['blocks'];
      }, $cols),
      'services' => [
        'title' => $blocks[2]['data']['text'],
        'description' => $blocks[3]['data']['text'],
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
    ->get()
    ->toArray();

  $response->getBody()->write(
    render('pages/blog/index.twig', [
      'posts' => $posts,
    ])
  );

  return $response;
});

$router->get('/blog/{post_id}', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $postData = \Posts::where('id', $args['post_id'])
    ->first()
    ->toArray();

  $response->getBody()->write(render('pages/blog/[blog-slug].twig', $postData));

  return $response;
});

// ABOUT US
$router->get('/o-nas', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $response->getBody()->write(render('pages/o-nas.twig', []));

  return $response;
});

// GALLERY
$router->get('/galerie', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $response->getBody()->write(render('pages/galerie.twig', []));

  return $response;
});

// KARIERA
$router->get('/kariera', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $opportunities = array_map(function ($opportu) {
    if (is_string($opportu['content'])) {
      return json_decode(
        json_encode(
          array_merge($opportu, [
            'content' => json_decode($opportu['content']),
          ])
        ),
        true
      );
    } else {
      return $opportu;
    }
  }, \Positions::all()->toArray());

  $response->getBody()->write(render('pages/kariera.twig', $opportunities));

  return $response;
});

// CERTIFICATES
$router->get('/certifikaty', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $response->getBody()->write(render('pages/certifikaty.twig', []));

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
$router->get('/sluzby/{serviceId}', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) {
  $services = \Services::all()->toArray();

  $response->getBody()->write(render('pages/blog/[blog-slug].twig', []));
});
