<?php
/**
 * DO NOT DELETE OR EDIT THIS FILE.
 * THIS FILE IS PART OF COCKPIT CMS
 * AND ANY MODIFICATION MAY BREAK OR BE
 * OVERRIDDEN IN NEXT UPDATE.
 *
 */

namespace App\Middleware;

use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;
use GuzzleHttp\Psr7\Response;

class Permission
{
  private $container;

  public function __construct($container)
  {
    $this->container = $container;
  }

  /**
   * Permission middleware class, it interacts with session and gets if in session theres a sufficient user role for provided route
   *
   * @param  \Psr\Http\Message\ServerRequestInterface $request  PSR7 request
   * @param  \Psr\Http\Message\ResponseInterface      $response PSR7 response
   * @param  callable                                 $next     Next middleware
   *
   * @return \Psr\Http\Message\ResponseInterface
   */
  public function __invoke(Request $request, RequestHandler $handler): Response
  {
    $user = $this->container->get('session')->get('user', false);
    $role = strtolower($user->role);

    // TODO accept roles from upper scope
    if ($role !== 'maintainer' && $role !== 'admin') {
      $response = new Response();

      prepareJsonResponse(
        $response,
        [],
        'Your user role is not sufficient',
        'role-not-sufficient',
      );

      return $response
        ->withStatus(401)
        ->withHeader('Content-Description', 'role not sufficient');
    }

    return $handler->handle($request);
  }
}