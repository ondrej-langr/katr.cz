<?php

namespace App\Services;

use DI\Container;
use Exception;
use Files;
use GuzzleHttp\Psr7\Stream;
use League\Flysystem\Filesystem;
use Path;

class ImageService
{
  private Filesystem $cacheFs;
  private Filesystem $fs;

  public function __construct(Container $container)
  {
    $this->fs = $container->get('filesystem');
    $this->cacheFs = $container->get('file-cache-filesystem');
  }

  public function getProcessed(Files $fileInfo, $args = [])
  {
    $file = $this->fs->readStream($fileInfo->filepath);
    $fileStream = $file;

    if (count($args)) {
      $fileName = basename(
        $fileInfo->filepath,
        '.' . pathinfo($fileInfo->filepath, PATHINFO_EXTENSION),
      );

      $fileNameWithArgs = implode('.', [
        implode(
          '&',
          array_map(function ($key) use ($args) {
            $arg = $args[$key];
            return "$key$arg";
          }, array_keys($args)),
        ),
        $fileName,
      ]);
      $fileBasenameWithArgs = "$fileNameWithArgs.jpeg";

      if (!$this->fs->fileExists($fileBasenameWithArgs)) {
        $gdImageSource = \imagecreatefromstring(stream_get_contents($file));

        if (isset($args['w']) && !isset($args['h'])) {
          $gdImageSource = imagescale($gdImageSource, $args['w']);
        } elseif (isset($args['w']) && isset($args['h'])) {
          $gdImageSource = imagescale($gdImageSource, $args['w'], $args['h']);
        }

        $imageConverted = \imagejpeg(
          $gdImageSource,
          Path::join(PROM_FILE_CACHE_ROOT, $fileBasenameWithArgs),
          $args['q'] ?? 100,
        );

        if (!$imageConverted) {
          throw new Exception('New image cannot be created');
        }
      }

      $fileStream = $this->cacheFs->readStream($fileBasenameWithArgs);
    }

    return new Stream($fileStream);
  }
}
