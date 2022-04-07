<?php

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

$container = $app->getContainer();

$router->get('/', function (ServerRequestInterface $request, ResponseInterface $response) use ($container) {

  $response
    ->getBody()
    ->write($container->get('twig')->render(
      'pages/landing-page.twig',
      [
        "baseUrl" => PROM_URL_BASE
      ]
    ));
    
  return $response;
});