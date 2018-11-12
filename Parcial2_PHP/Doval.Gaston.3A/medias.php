<?php

require_once 'accesoDatos.php';

class Medias
{

    public static function altaMedias($request, $response)
    {
        $pdo = AccesoDatos::DameUnObjetoAcceso();

        $campos = $request->getParsedBody();
        
        try
        {
            $query = $pdo->RetornarConsulta('INSERT INTO medias (color, marca, precio, talle) VALUES (:color, :marca, :precio, :talle)');
            $query->execute(array('color' => $campos['color'], 'marca' => $campos['marca'], 'precio' => $campos['precio'], 'talle' => $campos['talle']));
        }catch(Exception $e)
        {
            echo $e->getMessage();
        }
       
        if($query->rowCount())
        {
            echo "funciono";
        }else
        {
            echo 'no funciono';
        }

        return $response;
    }

    public static function traerMedias($request, $response)
    {
        $pdo = AccesoDatos::DameUnObjetoAcceso();
        $query = $pdo->RetornarConsulta('SELECT * FROM medias');
        $query->execute();
        $array_medias = array();
        while($media = $query->fetchObject())
        {
            array_push($array_medias, $media);
        }

        return $response->withJson($array_medias);
    }


    public static function borrarMedia($request, $response) //Funciona
    {
        $pdo = AccesoDatos::DameUnObjetoAcceso();

        $campos = $request->getParsedBody();

    
            $query = $pdo->RetornarConsulta('DELETE FROM medias WHERE id = :id');
            $query->execute(array('id' => $campos['id']));
            if($query->rowCount())
            {
                echo "funciono";
            }else
            {
                echo 'no funciono';
            }

    }

    public static function modificoMedia($request, $response) //Funciona
    {
        $pdo = AccesoDatos::DameUnObjetoAcceso();

        $campos = $request->getParsedBody();
        
            $query = $pdo->RetornarConsulta('UPDATE medias SET color = :color, marca = :marca, talle = :talle WHERE id = :id');
            $query->execute(array('color'=> $campos['color'], 'marca' => $campos['marca'], 'talle' => $campos['talle'], 'id' => $campos['id']));
            if($query->rowCount())
            {
                echo "funciono";
            }else
            {
                echo 'no funciono';
            }

    }
}

?>