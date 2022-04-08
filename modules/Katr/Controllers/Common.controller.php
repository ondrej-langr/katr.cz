<?php

namespace App\Controllers;

use DI\Container;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class Common
{
  private $container;

  public function __construct(Container $container)
  {
    $this->container = $container;
  }
}
