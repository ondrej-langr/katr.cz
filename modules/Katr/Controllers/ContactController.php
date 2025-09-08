<?php

use DI\Container;
use PromCMS\Core\Config;

class ContactController
{
  use \PromCMS\Core\Controllers\Traits\Model\I18n;

  private Container $container;
  private Config $config;

  public function __construct(Container $container)
  {
    $this->container = $container;
    $this->config = $container->get(\PromCMS\Core\Config::class);
    $this->languageConfig = $this->config->i18n;
  }

  public function __invoke(
    \Psr\Http\Message\ServerRequestInterface $request,
    \Psr\Http\Message\ResponseInterface $response,
    array $args
  ): \Psr\Http\Message\ResponseInterface {
    $params = $request->getQueryParams();
    $language = $this->getCurrentLanguage($request, $args);
    $twig = $this->container->get(\Slim\Views\Twig::class);
    /**
     * @type PHPMailer\PHPMailer\PHPMailer $emailService
     */
    $emailService = $this->container->get('email');

    if ($request->getMethod() === 'POST') {
      $data = $request->getParsedBody();

      if (
        !isset($data['h-captcha-response']) ||
        empty($data['h-captcha-response'])
      ) {
        return $response
          ->withStatus(302)
          ->withHeader('Location', '/kontakt?captchafail=true');
      }

      if (
        isset($data['email']) &&
        !empty($data['email']) &&
        isset($data['name']) &&
        !empty($data['name']) &&
        isset($data['message']) &&
        !empty($data['message'])
      ) {
        // if capcha is correct then proceed
        if (isCaptchaResponseValid($data['h-captcha-response'])) {
            $recipient = $data['email'];
            $recipientAdmin = 'sekretariat@katr.cz';
          

          $emailService->isHtml();
          $emailService->setFrom('sekretariat@katr.cz', 'Katr.cz');
          $emailService->addAddress($recipientAdmin);
          $emailService->Subject = 'Nový dotaz v kontaktním formuláři katr.cz';
          $emailService->Body = $twig
            ->getEnvironment()
            ->render('@modules:katr/email/contact-form.twig', [
              'email' => $recipient,
              'name' => $data['name'],
              'message' => $data['message'],
            ]);

          $emailSuccess = $emailService->send();

            $emailService->isHtml();
            $emailService->clearAllRecipients();    
            $emailService->setFrom('sekretariat@katr.cz', 'Katr.cz');
            $emailService->addAddress($recipient);
            $emailService->Subject = 'Děkujeme za objednávku na katr.cz';
            $emailService->Body = $twig
                ->getEnvironment()
                ->render('@modules:katr/email/contact-form-confirm.twig', []);
    
            $emailService->send();
        }

        return $response
          ->withStatus(302)
          ->withHeader(
            'Location',
            '/kontakt?success=' . ($emailSuccess ? 'true' : 'false')
          );
      }
    }

    $contacts = \Contacts::setLanguage($language)
      ->orderBy(['order' => 'asc', 'id' => 'asc'])
      ->getMany();
    $contactPositions = \ContactPositions::setLanguage($language)
      ->orderBy(['order' => 'asc', 'id' => 'asc'])
      ->getMany();

    $groupedContacts = [];
    foreach ($contactPositions as $contactPosition) {
      $contactPositionName = $contactPosition['name'];
      $groupedContacts[$contactPositionName]['label'] = $contactPositionName;

      foreach (array_filter($contacts, function ($item) use ($contactPosition) {
        return intval($item['category']) === intval($contactPosition['id']);
      })
        as $contact) {
        $groupedContacts[$contactPositionName]['contacts'][] = $contact;
      }
    }

    $twig->render(
      $response,
      '@modules:katr/pages/kontakt.twig',
      array_merge(getDefaultLayoutData($language, $request, $this->container), [
        'contactGroups' => $groupedContacts,
        'emailSent' => isset($params['success']),
        'captchafail' => isset($params['captchafail']),
        'emailSuccess' =>
        isset($params['success']) && $params['success'] === 'true',
        'settings' => [
          'hero_image' => getOption('contact_page_hero_image', $language)['content']['data'],
          'message_success' => getOption('contact_message_success', $language)['content']['data'],
          'message_error' => getOption('contact_message_error', $language)['content']['data'],
        ],
        'form' => [
          'text' => [
            'cs' => [
              'title' => 'Napište nám',
              'name' => 'Jméno',
              'message' => 'Zpráva',
              'send' => 'Odeslat',
              'captchafail' =>
              'Zapoměli jste vyplnit kontrolu před roboty. Vyplňte a pošlete znovu, prosím.',
            ],
            'en' => [
              'title' => 'Contact us',
              'name' => 'Name',
              'message' => 'Message',
              'send' => 'Send',
              'captchafail' =>
              'Captcha check failed or you forgot to complete it. Please check it and try again.',
            ],
          ],
        ],
      ])
    );

    return $response;
  }
}
