<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
require_once './vendor/autoload.php';
require_once 'medias.php';
require_once 'usuarios.php';
require_once 'ventas.php';
require_once 'mw.php';


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$app = new \Slim\App(["settings" => $config]);



$app->post('/', function(Request $request, Response $response){
    Medias::altaMedias($request, $response);
    return $response;
});

$app->get('/medias', function(Request $request, Response $response){
    $listado = Medias::traerMedias($request, $response);
    $mostrar = json_decode($listado->getBody());
    $mostrar = json_encode($mostrar);
    echo $mostrar;
});

$app->post('/usuarios', function(Request $request, Response $response){
    Usuario::altaUsuario($request, $response);
    return $response;
});

$app->get('/', function(Request $request, Response $response){
    $listado = Usuario::traerUsuarios($request, $response);
    $mostrar = json_decode($listado->getBody());
    $mostrar = json_encode($mostrar);
    echo $mostrar;
});


$app->post('/ventas', function(Request $request, Response $response){
    $resp = Ventas::altaVenta($request, $response);
    $mostrar = json_decode($resp->getBody());
    $mostrar = json_decode($resp->getBody());
    $mostrar = json_encode($mostrar);
    echo $mostrar;
});

$app->get('/ventas', function(Request $request, Response $response){
    $listado = Ventas::mostrarVentas($request, $response);
    $mostrar = json_decode($listado->getBody());
    $mostrar = json_encode($mostrar);
    echo $mostrar;
});

$app->delete('/', function(Request $request, Response $response){
    Medias::borrarMedia($request, $response);
})->add(MW::class . ":esPropietario"); //Funciona

$app->put('/', function(Request $request, Response $response){
    Medias::modificoMedia($request, $response);
})->add(MW::class . ":esPropietario"); //Funciona

$app->run();

?>