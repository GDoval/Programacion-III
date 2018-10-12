<?php

error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());

//Con eso podemos mostrar los errores en el navegador


//Leemos de una base de datos y generamos una clase standard donde le asociamos un indice y un valor

public function traerTodas()
{
    try {
        $lamparita = null;
        $lamparitas = null;
        $PDO = Conexion::ConectarDB();
        $sentencia = $PDO->prepare("SELECT * FROM lamparitas");
        $sentencia->execute();
        while($fila = $sentencia->fetch(PDO::FETCH_ASSOC))
        {
            $lamparita = new stdClass();
            $lamparita->tipo=$fila['tipo'];
            $lamparita->precio=$fila['precio'];  //Genero una stdClass para poder despues guardarlo en un JSON (tienen que ser todos los atributos publicos)
            $lamparita->color=$fila['color'];
            $lamparita->path=$fila['path'];

            $lamparitas[] = $lamparita;
        }
        return $lamparitas;

    }catch(PDOException $e)
    {
        echo $e->getMessage();
        return null;
    }
}
    public function Eliminar()
    {
        try
        {
            $PDO = Conexion::ConectarDB();
            $sentencia = $PDO->prepare("DELETE FROM lamparitas WHERE tipo = :tipo AND precio = :precio AND color = :color AND path = :path");
            $sentencia->execute(array("tipo" => $this->_tipo, "color" => $this->_color, "precio" => $this->_precio, "path" => $this->_pathFoto));
        }catch(PDOException $e)
        {
            echo $e->getMessage();
        }
    }

    public static function Modificar($lamp)
    {
        try
        {
            $PDO = Conexion::ConectarDB();
            $sentencia = $PDO->prepare("UPDATE lamparitas SET precio = :precio, path = :path 
                                        WHERE tipo = :tipo AND color = :color");
            return ($sentencia->execute(array("tipo" => $lamp->_tipo, "color" => $lamp->_color, "precio" => $lamp->_precio, "path" => $lamp->_pathFoto)));
        }catch(PDOException $e)
        {
            echo $e->getMessage();
            return false;
        }
    }

//Querys para borrar insertar y modificar en base de datos

public function Eliminar()
{
    try
    {
        $PDO = Conexion::ConectarDB();
        $sentencia = $PDO->prepare("DELETE FROM lamparitas WHERE tipo = :tipo AND precio = :precio AND color = :color AND path = :path");
        $sentencia->execute(array("tipo" => $this->_tipo, "color" => $this->_color, "precio" => $this->_precio, "path" => $this->_pathFoto));
    }catch(PDOException $e)
    {
        echo $e->getMessage();
    }
}

public static function Modificar($lamp)
{
    try
    {
        $PDO = Conexion::ConectarDB();
        $sentencia = $PDO->prepare("UPDATE lamparitas SET precio = :precio, path = :path 
                                    WHERE tipo = :tipo AND color = :color");
        return ($sentencia->execute(array("tipo" => $lamp->_tipo, "color" => $lamp->_color, "precio" => $lamp->_precio, "path" => $lamp->_pathFoto)));
    }catch(PDOException $e)
    {
        echo $e->getMessage();
        return false;
    }
}


public function Agregar()
{
    $PDO = Conexion::ConectarDB();
    $sentencia = $PDO->prepare("INSERT INTO lamparitas  VALUES (:tipo, :color, :precio, :path)");
    $sentencia->execute(array("tipo" => $this->_tipo, "color" => $this->_color, "precio" => $this->_precio, "path" => $this->_pathFoto));
    return true;
}




//Conexion a la base de datos

{
    public static function ConectarDB()
    {
        try
        {
            $conStr = 'mysql:host=localhost;dbname=lamparitas_bd'; //Armar la conexion sin espacios en blanco
            $PDO = new PDO($conStr, 'root', 'ffsquall');
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        return $PDO;
    }
?>