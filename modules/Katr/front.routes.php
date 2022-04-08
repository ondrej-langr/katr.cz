<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$container = $app->getContainer();
$promBase = PROM_URL_BASE ? PROM_URL_BASE : '/';

$router->get('/', function (
  ServerRequestInterface $request,
  ResponseInterface $response
) use ($container, $promBase) {
  $response->getBody()->write(
    $container->get('twig')->render('pages/landing-page.twig', [
      'baseUrl' => $promBase,
    ])
  );

  return $response;
});

$router->get('/blog', function (
  ServerRequestInterface $request,
  ResponseInterface $response
) use ($container, $promBase) {
  $response->getBody()->write(
    $container->get('twig')->render('pages/blog/index.twig', [
      'baseUrl' => $promBase,
    ])
  );

  return $response;
});

$router->get('/blog/{post_slug}', function (
  ServerRequestInterface $request,
  ResponseInterface $response,
  $args
) use ($container, $promBase) {
  $response->getBody()->write(
    $container->get('twig')->render('pages/blog/[blog-slug].twig', [
      'baseUrl' => $promBase,
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
  $response->getBody()->write(
    $container->get('twig')->render('pages/kariera.twig', [
      'baseUrl' => $promBase,
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
  $response->getBody()->write(
    $container->get('twig')->render('pages/kontakt.twig', [
      'baseUrl' => $promBase,
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
