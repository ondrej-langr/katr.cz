<?php

use DI\Container;
use PromCMS\Core\Config;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class DefaultController
{
  use \PromCMS\Core\Controllers\Traits\Model\I18n;

  private Container $container;
  private Config $config;

  public function __construct(Container $container)
  {
    $this->container = $container;
    $this->config = $container->get(Config::class);
    $this->languageConfig = $this->config->i18n;
  }

  function mainPage(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $language = $this->getCurrentLanguage($request, $args);
    $twig = $this->container->get(\Slim\Views\Twig::class);

    $posts = \Posts::setLanguage($language)
      ->where(['is_published', '=', true])
      ->orderBy(['created_at' => 'desc'])
      ->limit(3)
      ->getMany();

    $opportunities = \Positions::setLanguage($language)
      ->limit(3)
      ->getMany();

    $twig->render(
      $response,
      '@modules:katr/pages/landing-page.twig',
      array_merge(getDefaultLayoutData($language, $request, $this->container), [
        'data' => [
          'seoTitle' => 'Hlavní stránka',
          'posts' => $posts,
          'opportunities' => $opportunities,
          'cols' => [
            getOption('main_page_first_col', $language)['content']['data'],
            getOption('main_page_second_col', $language)['content']['data'],
            getOption('main_page_third_col', $language)['content']['data'],
          ],
          'title' => getOption('main_page_title', $language)['content']['data'],
          'description' => getOption('main_page_description', $language)['content']['data'],
          'about' => [
            'content' => getOption('main_page_about', $language)['content']['data'],
          ],
          'blog_list' => [
            'before' => getOption('main_page_blog_list_before', $language)['content']['data'],
            'after' => getOption('main_page_blog_list_after', $language)['content']['data'],
            'image' => getOption('main_page_blog_list_image', $language)['content']['data'],
          ],
          'positions' => [
            'before' => getOption('main_page_positions_before', $language)['content']['data'],
            'after' => getOption('main_page_positions_after', $language)['content']['data'],
            'image' => getOption('main_page_positions_image', $language)['content']['data'],
          ],
        ],
      ]),
      $language
    );

    return $response;
  }

  function karieraPage(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $routeArgs
  ): ResponseInterface {
    $language = $this->getCurrentLanguage($request, $routeArgs);
    $opportunities = \Positions::setLanguage($language)->getMany();
    $twig = $this->container->get(\Slim\Views\Twig::class);

    $opportunities = array_map(function ($opportu) {
      return repairBlockContent($opportu);
    }, $opportunities);

    $twig->render(
      $response,
      'pages/kariera.twig',
      array_merge(getDefaultLayoutData($language, $request, $this->container), [
        'data' => [
          'opportunities' => $opportunities,
          'settings' => [
            'hero_image' => getOption('kariera_hero_image', $language)['content']['data'],
          ],
        ],
      ]),
      $language
    );

    return $response;
  }

  function fallbackPage(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $routeArgs
  ): ResponseInterface {
    $language = $this->getCurrentLanguage($request, $routeArgs);
    $twig = $this->container->get(\Slim\Views\Twig::class);

    try {
      $page = \Pages::setLanguage($language)
        ->where(
          array_merge(
            [['is_published', '=', true]],
            getMultilangField(
              'slug',
              $routeArgs['page_slug'],
              $this->config->i18n->languages
            )
          )
        )
        ->getOne()
        ->getData();
    } catch (\Exception $e) {

      $twig->render($response, '@modules:katr/pages/404.twig', [], $language);

      return $response->withStatus(404);
    }

    // TODO something more smart?
    if (
      str_includes(
        json_encode(repairBlockContent($page)),
        'blog-page-items-list'
      )
    ) {
      $page['posts'] = \Posts::setLanguage($language)
        ->orderBy(['created_at' => 'desc'])
        ->where(['is_published', '=', true])
        ->getMany();
    }

    $twig->render(
      $response,
      '@modules:katr/pages/[page-slug].twig',
      array_merge(getDefaultLayoutData($language, $request, $this->container), [
        'data' => connectGalleries(repairBlockContent($page)),
      ])
    );

    return $response;
  }
}
