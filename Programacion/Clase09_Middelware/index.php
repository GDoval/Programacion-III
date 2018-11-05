<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require_once './vendor/autoload.php';
require_once 'usuario.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;


$app = new \Slim\App(["settings" => $config]);


$app->get('[/]', function (Request $request, Response $response) {    
    $response->getBody()->write("GET => Bienvenido!!! a SlimFramework");
    return $response;
});

$app->post('[/]', function (Request $request, Response $response) {    
    $response->getBody()->write("POST => Bienvenido!!! a SlimFramework");
    return $response;
});
$app->put('[/]', function (Request $request, Response $response) {    
    $response->getBody()->write("PUT => Bienvenido!!! a SlimFramework");
    return $response;
});
$app->delete('[/]', function (Request $request, Response $response) {    
    $response->getBody()->write("DELETE => Bienvenido!!! a SlimFramework");
    return $response;
});



$app->get('/saludar[/]', function (Request $request, Response $response) {    
    $response->getBody()->write("Hola mundo SlimFramework!!!");
    return $response;

});

/* Middelwares */


//El callable vuelve al codigo del verbo (get, post etc) cuando se llama desde $response
//Cuando retorna el verbo, vuelve al middelware y se termina de ejecutar este, y devuelve $response
$mwUno = function($request, $response, $next){

    //Se ejecuta codigo antes de llamar al callable ($next en este caso)
    $response->getBody()->write("Antes de llamar al middleware \n");
    
    //Ejecuto el callable
    $response = $next($request, $response);

    //Antes del return se ejecuta el resto del codigo
    $response->getBody()->write("\nDespues de ejecutar next");

    return $response;
};

$app->get('/mw', function (Request $request, Response $response) {    
    $response->getBody()->write("GET => Hi");
    return $response;
})->add(function($request, $response, $next)
{
        //Se ejecuta codigo antes de llamar al callable ($next en este caso)
        $response->getBody()->write("Antes de llamar al middleware desde el verbo\n");
    
        //Ejecuto el callable
        $response = $next($request, $response);
    
        //Antes del return se ejecuta el resto del codigo
        $response->getBody()->write("\nDespues de ejecutar next desde el verbo");
    
        return $response;
});

$app->group('/grupo', function(){
    $this->get('/hora', function($request, $response){
        $response->getBody()->write(date('H:i:s' . "\n"));
    })->add(function($request, $response, $next){
        $response->getBody()->write("Middelware antes de decir la hora\n");
        $response = $next($request, $response);
        $response->getBody()->write("\nDespues de ejectura middelware de la hora");
        return $response;
    });
})->add(function($request, $response, $next){
    $response->getBody()->write("Middelware del grupo entrando\n");
    $response = $next($request, $response);
    $response->getBody()->write("\nMiddelware del grupo saliendo");
    return $response;
})->add(function($request, $response, $next){
    $response->getBody()->write("Middelware anidado en el Middelware del grupo, entrando\n");
    $response = $next($request, $response);
    $response->getBody()->write("\nMiddelware anidado en el Middelware del grupo, saliendo");
    return $response;
});


$app->group('/credenciales/poo', function(){
    $this->get('/', function($request, $response){
        $response->getBody()->write("Entre por GET\n");
        return $response;
    });
    $this->post('/', function($request, $response, $args){
        $response->getBody()->write("Entre por POST\n");
        return $response;
    });
})->add(function($request, $response, $next){
    if($request->isGet())
    {
        $response = $next($request, $response);
        return $response;
    }else
    {
        if($_POST['usuario'] == 'admin')
        {
            $response->getBody()->write("<h3>" . $_POST['usuario'] . " Bienvenido!</h3>\n");
            $response = $next($request, $response);
            return $response;
        }else
        {
            $response->getBody()->write("<h2>" . $_POST['usuario'] . " Juira!</h2>\n");
        }
    }
    return $response;
});


/*Con objetos */


$app->group('/credenciales/poo', function(){
    $this->get('/', function($request, $response){
        $response->getBody()->write("Entre por GET\n");
        return $response;
    });
    $this->post('/', function($request, $response, $args){
        $response->getBody()->write("Entre por POST\n");
        return $response;
    });
})->add(function($request, $response, $next){
    $response = $next($request, $response);
    return $response;
})->add(\usuario::class . ":Verificar");
//$app->add($mwUno);
$app->run();
?>





