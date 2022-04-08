<?php

namespace App\Controllers;

use DI\Container;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class Sluzby
{
  private $container;
  private $twig;
  private $promBase;

  public function __construct(Container $container)
  {
    $this->promBase = PROM_URL_BASE ? PROM_URL_BASE : '/';
    $this->container = $container;
    $this->twig = $container->get('twig');
  }

  function doprava(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $response->getBody()->write(
      $this->twig->render('pages/sluzby/doprava.twig', [
        'baseUrl' => $this->promBase,
      ])
    );

    return $response;
  }

  function drevarskaVyroba(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $response->getBody()->write(
      $this->twig->render('pages/sluzby/drevarska-vyroba.twig', [
        'baseUrl' => $this->promBase,
      ])
    );

    return $response;
  }

  function lesnictvi(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $response->getBody()->write(
      $this->twig->render('pages/sluzby/lesnictvi.twig', [
        'baseUrl' => $this->promBase,
      ])
    );

    return $response;
  }

  function nakup(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $response->getBody()->write(
      $this->twig->render('pages/sluzby/nakup.twig', [
        'baseUrl' => $this->promBase,
      ])
    );

    return $response;
  }

  function pohonneHmoty(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $response->getBody()->write(
      $this->twig->render('pages/sluzby/pohonne-hmoty.twig', [
        'baseUrl' => $this->promBase,
      ])
    );

    return $response;
  }

  function prodejProduktu(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $response->getBody()->write(
      $this->twig->render('pages/sluzby/prodej-produktu.twig', [
        'baseUrl' => $this->promBase,
      ])
    );

    return $response;
  }

  function servis(
    ServerRequestInterface $request,
    ResponseInterface $response,
    array $args
  ): ResponseInterface {
    $response->getBody()->write(
      $this->twig->render('pages/sluzby/servis.twig', [
        'baseUrl' => $this->promBase,
      ])
    );

    return $response;
  }
}
