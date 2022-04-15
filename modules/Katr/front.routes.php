<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$container = $app->getContainer();
$promBase = PROM_URL_BASE ? PROM_URL_BASE : '/';

$router->get('/', function (
  ServerRequestInterface $request,
  ResponseInterface $response
) use ($container, $promBase) {
  $posts = \Posts::orderByDesc('created_at')
    ->limit(3)
    ->get()
    ->toArray();

  $opportunities = \Positions::limit(3)
    ->get()
    ->toArray();

  $response->getBody()->write(
    $container->get('twig')->render('pages/landing-page.twig', [
      'baseUrl' => $promBase,
      'data' => [
        'posts' => $posts,
        'opportunities' => $opportunities,
      ],
    ])
  );

  return $response;
});

$router->get('/blog', function (
  ServerRequestInterface $request,
  ResponseInterface $response
) use ($container, $promBase) {
  $posts = \Posts::orderByDesc('created_at')
    ->get()
    ->toArray();

  $response->getBody()->write(
    $container->get('twig')->render('pages/blog/index.twig', [
      'baseUrl' => $promBase,
      'data' => [
        'posts' => $posts,
      ],
    ])
  );

  return $response;
});

$router->get('/blog/{post_id}', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) use ($container, $promBase) {
  $postData = \Posts::where('id', $args['post_id'])
    ->first()
    ->toArray();

  $response->getBody()->write(
    $container->get('twig')->render('pages/blog/[blog-slug].twig', [
      'baseUrl' => $promBase,
      'data' => $postData,
    ])
  );

  return $response;
});

$router->get('/o-nas', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) use ($container, $promBase) {
  $response->getBody()->write(
    $container->get('twig')->render('pages/o-nas.twig', [
      'baseUrl' => $promBase,
    ])
  );

  return $response;
});

$router->get('/galerie', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) use ($container, $promBase) {
  $response->getBody()->write(
    $container->get('twig')->render('pages/galerie.twig', [
      'baseUrl' => $promBase,
    ])
  );

  return $response;
});

$router->get('/kariera', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) use ($container, $promBase) {
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

  $response->getBody()->write(
    $container->get('twig')->render('pages/kariera.twig', [
      'baseUrl' => $promBase,
      'data' => $opportunities,
    ])
  );

  return $response;
});

$router->get('/certifikaty', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) use ($container, $promBase) {
  $response->getBody()->write(
    $container->get('twig')->render('pages/certifikaty.twig', [
      'baseUrl' => $promBase,
    ])
  );

  return $response;
});

$router->get('/kontakt', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) use ($container, $promBase) {
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
    $container->get('twig')->render('pages/kontakt.twig', [
      'baseUrl' => $promBase,
      'data' => [
        'contactGroups' => $groupedContacts,
      ],
    ])
  );

  return $response;
});

$router->group('/sluzby', function ($router) {
  $router->get('/doprava', '\App\Controllers\Sluzby:doprava');
  $router->get('/drevarska-vyroba', '\App\Controllers\Sluzby:drevarskaVyroba');
  $router->get('/lesnictvi', '\App\Controllers\Sluzby:lesnictvi');
  $router->get('/nakup', '\App\Controllers\Sluzby:nakup');
  $router->get('/pohonne-hmoty', '\App\Controllers\Sluzby:pohonneHmoty');
  $router->get('/prodej-produktu', '\App\Controllers\Sluzby:prodejProduktu');
  $router->get('/servis', '\App\Controllers\Sluzby:servis');
});
