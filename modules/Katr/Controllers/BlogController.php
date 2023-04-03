<?php

use DI\Container;

class BlogController
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

    try {
      $postData = \Posts::setLanguage($language)
        ->where(
          array_merge(
            [['is_published', '=', true]],
            getMultilangField(
              'slug',
              $routeArgs['post_slug'],
              $this->config->i18n->languages
            )
          )
        )
        ->getOne()
        ->getData();
    } catch (\Exception $e) {
      $twig->render(
        $response,
        '@modules:katr/pages/404.twig',
        [],
        $language
      );

      return $response->withStatus(404);
    }

    $twig->render(
      $response,
      '@modules:katr/pages/blog/[blog-slug].twig',
      array_merge(getDefaultLayoutData($language, $request, $this->container), [
        'data' => repairBlockContent($postData),
      ])
    );

    return $response;
  }
}
