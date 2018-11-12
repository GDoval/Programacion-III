<?php

require_once 'accesoDatos.php';

class Usuario
{
    public static function altaUsuario($request, $response)
    {
        $pdo = AccesoDatos::DameUnObjetoAcceso();

        $campos = $request->getParsedBody();
        $foto = $request->getUploadedFiles();
        //var_dump($foto);
        $foto = json_encode($foto);
        $foto = json_decode($foto);
        move_uploaded_file($foto->foto->file, './fotos/' .$campos['nombre'] . '.jpg');
        $query = $pdo->RetornarConsulta('INSERT INTO usuarios (correo, clave, nombre, apellido, perfil, foto) VALUES (:correo, :clave, :nombre, :apellido, :perfil, :foto)');
        $query->execute(array('correo' => $campos['correo'], 'clave' => $campos['clave'], 'nombre' => $campos['nombre'], 'apellido' => $campos['apellido'], 'perfil' => $campos['perfil'], 'foto' => $foto->foto->file ));
        if($query->rowCount())
        {
            echo "funciono";
        }else
        {
            echo 'no funciono';
        }

        return $response;
    }

    public static function traerUsuarios($request, $response)
    {
        $pdo = AccesoDatos::DameUnObjetoAcceso();
        $query = $pdo->RetornarConsulta('SELECT * FROM usuarios');
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