<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
require_once './vendor/autoload.php';
require_once 'login.php';

use Firebase\JWT\JWT;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$app = new \Slim\App(["settings" => $config]);


$app->post('/login', function(Request $request, Response $response){
    $validar = new stdClass();
    if(isset($_POST['usuario']))
    {
        $validar = logear($_POST['usuario'], $_POST['password']);
        if($validar)
        {
            $payload = array(
                'ok' => true,
                'mensaje' => 'usuario valido',
            );
            $resp = new stdClass();
            $token = JWT::encode($payload, "clavesecreta");
            $resp->exito = true;
            $resp->mensaje = 'token generado';
            $resp->token = $token;
            echo json_encode($resp);
        }
    }
});

$app->post('/validar', function(Request $request, Response $response){
    $validar = validar($_POST['token']);
    echo $validar;
})

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