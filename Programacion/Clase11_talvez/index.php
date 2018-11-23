<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
require_once './vendor/autoload.php';

use Firebase\JWT\JWT;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$app = new \Slim\App(["settings" => $config]);


$app->post('/jwt/Crear[/]', function(Request $request, Response $response){
    $datos = $request->getParsedBody();
    $payload = array(
        'data' => $datos,
        'sarasa' => "sarasas",
    );

    $token = JWT::encode($payload, "unaclave");
    return $response->withJson($token,200);
});


$app->post('/jwt/Traer[/]', function(Request $request, Response $response){
    $token = $request->getParsedBody();
    $token = $token['token'];
    try
    {
        $decode = JWT::decode(
            $token,
            "unaclave",
            ['HS256']
        );
    }catch(Exception $e)
    {
        throw new Exception("No valido ->" . $e->getMessage());
    }
    return "Todo OK";
});


$app->run()

?>