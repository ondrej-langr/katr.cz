<?php

/** @var \DI\Container $container */

// get container
$container = $app->getContainer();

$utilsService = $container->get('utils-service');

$utilsService->autoloadFolder(__DIR__ . '/Services');
$utilsService->autoloadFolder(__DIR__ . '/Http/Middleware');

class Path
{
  private static function hasSystemPathStarter(string $path)
  {
    return str_starts_with($path, DIRECTORY_SEPARATOR) ||
      str_starts_with($path, 'C:');
  }

  public static function join(...$args)
  {
    return (Path::hasSystemPathStarter($args[0]) ? '' : DIRECTORY_SEPARATOR) .
      implode(DIRECTORY_SEPARATOR, $args);
  }
}

$container->set('password-service', function () {
  return new \App\Services\Password();
});

$container->set('jwt-service', function () {
  return new \App\Services\JWT();
});

$container->set('image-service', function () use ($container) {
  return new \App\Services\ImageService($container);
});

$container->set('file-service', function () use ($container) {
  return new \App\Services\FileService($container);
});
