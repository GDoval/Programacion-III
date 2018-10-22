<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './vendor/autoload.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

/*
¡La primera línea es la más importante! A su vez en el modo de 
desarrollo para obtener información sobre los errores
 (sin él, Slim por lo menos registrar los errores por lo que si está utilizando
  el construido en PHP webserver, entonces usted verá en la salida de la consola 
  que es útil).

  La segunda línea permite al servidor web establecer el encabezado Content-Length, 
  lo que hace que Slim se comporte de manera más predecible.
*/

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

/* Ruteo de prueba */

$app->any('/todos[/{id}]', function(Request $request, Response $response, $args){
    var_dump($request->getMethod());
    $id = null;
    if (isset($args['id']))
    {
        $id = $args['id'];
    }
    $response->getBody()->write("Recibimos: " . $id . " A través del verbo->");
    return $response;
}
);

$app->group('/usuarios', function()
{
    $this->get('/', function(Request $request, Response $response)
    {
        $response->getBody()->write("Llegamos OK por get sin parametros");
        return $response;
    }
);
    $this->get('/{id}', function(Request $request, Response $response, $args)
    {
        //Hago un array asociativo para  encodear a JSON despues
        $arr[0] = array("nombre" => "juan", "apellido" => "Cito", "id" => $args['id'] );
        $arr[1] = array("nombre" => "Pedr", "apellido" => "Ito", "id" => "2" );
        $arr[2] = array("nombre" => "Lelele", "apellido" => "Kekeke", "id" => "3" );
        //Retorna un arrya en formato JSON, mas un codigo de error o de exito. En este cao 200 es exito
        //return $response->withJson($arr, 200);


        if($args['id'] == 0)
        {
            $resp = array("Mensaje" => "Usuario no encontrado", "error" => "404");
            return $response->withJson($resp, 404);
        }else
        {
            return $response->withJson($arr, 200);
        }
    });

    $this->put('/', function(Request $request, Response $response)
        {
            $obj = new stdClass();

            //Devuelve un array con todo lo que le pasamos en el body. En este caso, la clave
            //json hace referencia al valor que le pasamos (que es un string en formato json)
            $json = $request->getParsedBody();

            //Aca decodeamos a json unicamente el indice json
            $arrayjson = json_decode($json['json']);
            var_dump($arrayjson);
            //$response->getBody()->write($resp->nombre . "-" . $resp->apellido);
        }
    );
}

);
$app->run();