<?php

require_once 'accesoDatos.php';

class Ventas
{
    public static function altaVenta($request, $response)
{
    $pdo = AccesoDatos::DameUnObjetoAcceso();

    $campos = $request->getParsedBody();

    $query = $pdo->RetornarConsulta('INSERT INTO ventas (id_usuario, id_media, cantidad) VALUES (:id_usuario, :id_medias, :cantidad)');
    $query->execute(array('id_usuario' => $campos['id_usuario'], 'id_medias' => $campos['id_medias'], 'cantidad' => $campos['cantidad']));
    if($query->rowCount())
    {
        return $response->withJson(['ok' => true], 200);
    }else
    {
        return $response->withJson(['ok' => false], 504);
    }
}


public static function mostrarVentas($request, $response)
{
    $pdo = AccesoDatos::DameUnObjetoAcceso();
    $query = $pdo->RetornarConsulta('SELECT * FROM ventas');
    $query->execute();
    $array = array();
    while($usuario = $query->fetchObject())
    {
        array_push($array, $usuario);
    }
    return $response->withJson($array);
}
}



?>