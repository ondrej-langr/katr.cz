<?php

use DI\Container;

class ServicesController
{
  use \PromCMS\Core\Controllers\Traits\Model\I18n;

  private Container $container;
  private \PromCMS\Core\Config $config;

  public function __construct(Container $container)
  {
    $this->container = $container;
    $this->config = $container->get(\PromCMS\Core\Config::class);
    $this->languageConfig = $this->config->i18n;
  }

  function entryPage(
    \Psr\Http\Message\ServerRequestInterface $request,
    \Psr\Http\Message\ResponseInterface $response,
    array $routeArgs
  ): \Psr\Http\Message\ResponseInterface {
    $language = $this->getCurrentLanguage($request, $routeArgs);
    $twig = $this->container->get(\Slim\Views\Twig::class);

    $service = \Services::setLanguage($language)
      ->where(
        getMultilangField(
          'slug',
          $routeArgs['service_slug'],
          $this->config->i18n->languages
        )
      )
      ->getOne();

    if (!$service) {

      $twig->render(
        $response,
        '@modules:katr/pages/404.twig',
        [],
      );

      return $response->withStatus(404);
    }

    $twig->render(
      $response,
      '@modules:katr/pages/sluzby/[service-slug].twig',
      array_merge(getDefaultLayoutData($language, $request, $this->container), [
        'data' => repairBlockContent($service->getData()),
      ])
    );

    return $response;
  }
}
