<?php

use GuzzleHttp\Psr7\Response;
use PromCMS\Core\Config;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Slim\App;
use Slim\Routing\RouteCollectorProxy as Router;

return function (App $app, Router $router) {
  $container = $app->getContainer();

  // Redirect to index even on languages
  // $app->add(function (
  //   ServerRequestInterface $request,
  //   RequestHandlerInterface $handler
  // ) use ($container) {
  //   $uri = $request->getUri();
  //   $path = $uri->getPath();

  //   $languages = implode('|', $container->get(Config::class)->i18m->languages);
  //   if (preg_match("/^\/($languages){1}$/", $path)) {
  //     $response = new Response();

  //     echo $path;
  //     return $response->withStatus(301)->withHeader('Location', strval($uri));
  //   }

  //   return $handler->handle($request);
  // });

  $router->get('/', 'DefaultController:mainPage');
  $router->get('/blog/{post_slug}', 'BlogController:entryPage');
  $router->get('/sluzby/{service_slug}', 'ServicesController:entryPage');
  $router->get('/kariera', 'DefaultController:karieraPage');
  $router->map(['GET', 'POST'], '/kontakt', ContactController::class);
  $router->get('/{page_slug}', 'DefaultController:fallbackPage');
};
