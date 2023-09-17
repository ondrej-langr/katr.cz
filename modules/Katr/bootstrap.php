<?php
// In this file you can tell what this module contains or have here something that should be loaded before your models, routes, ..etc

use DI\Container;
use GuzzleHttp\Psr7\Response;
use PromCMS\Core\Config;
use PromCMS\Core\Models\Settings;
use PromCMS\Core\Services\LocalizationService;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use PromCMS\Core\Utils;
use Slim\App;

/**
 * If current haystack includes needle.
 * Polyfil of php8 str_includes
 */
if (!function_exists("str_includes")) {
  function str_includes(string $toSearch, string $text)
  {
    return strpos($toSearch, $text) !== false;
  }
}

function checkCaptcha ($captcha, $returnResponse = false) {
  $captchaData = [
    'secret' => $_ENV['SECURITY_HCAPTCHA_SECRET'],
    'response' => $captcha,
  ];

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, 'https://hcaptcha.com/siteverify');
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($captchaData));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $captchaResponse = curl_exec($ch);
  $captchaResponseData = json_decode($captchaResponse);

  if ($returnResponse) {
    return $captchaResponse;
  }

  return $captchaResponseData->success;
}

$settings = [];
function getOption($id, $onLanguage = null)
{
  $onLanguageCode = $onLanguage == null ? 'default' : $onLanguage;

  if (!isset($settings[$onLanguageCode])) {
    $query = (new Settings())->query();

    if ($onLanguage) {
      $query->setLanguage($onLanguage);
    }

    $settings[$onLanguageCode] = $query->orderBy(['id' => 'asc'])->getMany();
  }

  foreach ($settings[$onLanguageCode] as $val) {
    if ($val['name'] === $id) {
      return json_decode(json_encode($val), true);
    }
  }

  return null;
}

function getMultilangField(string $fieldName, $value, array $languages)
{
  $final = [];
  foreach ($languages as $language) {
    $final[] = [
      \PromCMS\Core\Database\Query::$TRANSLATIONS_FIELD_NAME .
        ".$language.$fieldName",
      '=',
      $value,
    ];
    $final[] = 'OR';
  }

  array_pop($final);

  return $final;
}

function getDefaultLayoutData(
  $language,
  \Psr\Http\Message\ServerRequestInterface $request,
  Container $container
) {
  $localizationConfig = $container->get(Config::class)->i18n;
  $imageService = $container->get(\PromCMS\Core\Services\ImageService::class);
  $fileService = $container->get(\PromCMS\Core\Services\FileService::class);

  $defaultLanguage = $localizationConfig->default;
  $language = $language == null ? $defaultLanguage : $language;
  $currentUri = $request->getUri()->getPath();
  $languages = $localizationConfig->languages;
  $translations = $container
    ->get(LocalizationService::class)
    ->getTranslations($language);

  $getTranslations = function ($key) use ($translations) {
    return $translations[$key] ?? $key;
  };

  $menuPages = \Pages::setLanguage($language)
    ->where([['showInMenu', '=', true], ['is_published', '=', true]])
    ->orderBy(['order' => 'asc', 'id' => 'asc'])
    ->getMany();

  $services = \Services::setLanguage($language)
    ->orderBy(['order' => 'asc', 'id' => 'asc'])
    ->getMany();

  $languageSwitcherOptions = [];
  foreach ($languages as $iterationLanguage) {
    $currentLanguagePrefix = "/$language/";

    // if we have language set in url
    if (str_includes($currentUri, $currentLanguagePrefix)) {
      $languageSwitcherOptions[$iterationLanguage] = str_replace(
        $currentLanguagePrefix,
        "/$iterationLanguage/",
        $currentUri
      );
    } else {
      if ($iterationLanguage == $defaultLanguage) {
        $languageSwitcherOptions[$iterationLanguage] = $currentUri;
      } else {
        $languageSwitcherOptions[$iterationLanguage] =
          $iterationLanguage . $currentUri;
      }
    }
  }

  $heroImageId = getOption('default_hero_image')['content']['data'];
  $heroImageUrl = 'assets/images/header-bg2.jpg';
  if ($heroImageId) {
    $fileInfo = $fileService->getById($heroImageId);
    $heroImageUrl = $imageService->getProcessed($fileInfo->getData())['src'];
  }

  $layoutBase = [
    'request' => [
      'uri' => $currentUri,
    ],
    'baseUrl' => $container->get(Config::class)->app->url,
    'services' => $services,
    'default_hero_image' => $heroImageUrl,
    'footer' => [
      'contacts' => getOption('footer_contacts', $language),
      'fakturace' => getOption('footer_secret_items', $language),
      'address' => getOption('footer_address', $language),
      'hot_list' => getOption('footer_hot_list', $language),
      'docs' => getOption('footer_docs_list', $language),
    ],
    'language' => $language,
    'defaultLanguage' => $defaultLanguage,
    'languages' => $languages,
    'languageSwitcher' => [
      'options' => $languageSwitcherOptions,
    ],
    'languageLabels' => [
      'cs' => 'Čeština',
      'en' => 'English',
      'de' => 'German',
    ],
    'allPages' => $menuPages,
    'headerLabels' => [
      'about' => $getTranslations('O firmě'),
      'services' => $getTranslations('Služby'),
      'kariera' => $getTranslations('Kariéra'),
      'contact' => $getTranslations('Kontakt'),
      'kariera_title' => $getTranslations(
        'Nabízíme pracovní příležitost na těchto pozicích'
      ),
    ],
    'translations' => $translations,
  ];

  return $layoutBase;
}

function cleanJson($value)
{
  return json_decode(json_encode($value), true);
}

function repairBlockContent($item)
{
  if (is_string($item['content'])) {
    $content = json_decode($item['content']);

    return json_decode(
      json_encode(
        array_merge($item, [
          'content' => $content,
        ])
      ),
      true
    );
  } else {
    return json_decode(json_encode($item), true);
  }
}

function connectGalleries($content = []): array
{
  if (isset($content['content']) && isset($content['content']['blocks'])) {
    $bigGalleryPocket = [];
    $newBlocks = [];

    foreach ($content['content']['blocks'] as $key => $block) {
      if ($block['type'] === 'gallery') {
        $bigGalleryPocket[] = $block;
      } else {
        if (count($bigGalleryPocket) > 1) {
          $blockValue = [
            'type' => 'big-gallery',
            'data' => $bigGalleryPocket,
          ];
        } elseif (count($bigGalleryPocket) === 1) {
          $blockValue = $bigGalleryPocket[0];
        } else {
          $blockValue = $block;
        }
        $newBlocks[] = $blockValue;
        $bigGalleryPocket = [];
      }

      // If we end with gallery we have to attach that gallery too
      if (
        $key === count($content['content']['blocks']) - 1 &&
        count($bigGalleryPocket)
      ) {
        if (count($bigGalleryPocket) > 1) {
          $blockValue = [
            'type' => 'big-gallery',
            'data' => $bigGalleryPocket,
          ];
        } else {
          $blockValue = $bigGalleryPocket[0];
        }

        $newBlocks[] = $blockValue;
      }
    }

    $content['content']['blocks'] = $newBlocks;
  }

  return $content;
}

return function (App $app) {
  $container = $app->getContainer();
  $utils = $container->get(Utils::class);

  $beforeMiddleware = function (Request $request, RequestHandler $handler) {
    $response = $handler->handle($request);

    // redirect to www everytime
    if ($request->getUri()->getHost() === "katr.cz") {
      $response = new Response(302);
      $uri = $request->getUri()->withHost("www.katr.cz")->withPort(null);

      return $response->withHeader("Location", $uri->__toString());
    }

    return $response;
  };

  $app->add($beforeMiddleware);

  $utils->autoloadControllers(__DIR__);
};
