<?php

use Slim\App;
use Slim\Routing\RouteCollectorProxy as Router;

return function (App $app, Router $router) {
  $router->get('/', 'DefaultController:mainPage');
  $router->get('/blog/{post_slug}', 'BlogController:entryPage');
  $router->get('/sluzby/{service_slug}', 'ServicesController:entryPage');
  $router->get('/kariera', 'DefaultController:karieraPage');
  $router->map(['GET', 'POST'], '/kontakt', ContactController::class);
  $router->get('/{page_slug}', 'DefaultController:fallbackPage');
};
