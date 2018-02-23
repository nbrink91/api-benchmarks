<?php

require 'vendor/autoload.php';

$app = new \Slim\App();

$app->get('/', function (\Slim\Http\Request $request, \Slim\Http\Response $response, array $args) {
    return $response->withJson([
        'message' => 'Hello, world!'
    ]);
});

$app->run();