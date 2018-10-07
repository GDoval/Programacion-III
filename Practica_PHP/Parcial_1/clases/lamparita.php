<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());


include_once "conexion.php";
include_once "IVendible.php";
class Lamparita implements IVendible
{
    private $_tipo;
    private $_precio;
    private $_color;
    private $_pathFoto;

    public function __construct($tipo = "default", $precio = 5, $color = "blanco", $path = "default")
    {
        $this->_tipo = $tipo;
        $this->_precio = $precio;
        $this->_color = $color;
        $this->_pathFoto = $path;
    }

    public function toString()
    {
        return $this->_tipo . "-" . $this->_precio . "-" . $this->_color . "-" . $this->_pathFoto;
    }

    public function setTipo($param)
    {
        $this->_tipo = $param;
    }

    public function setPrecio($param)
    {
        $this->_precio = $param;
    }

    public function setColor($param)
    {
        $this->_color  = $param;
    }

    public function setPath($param)
    {
        $this->_pathFoto = $param;
    }

    public function getPath()
    {
        return $this->_pathFoto;
    }

    public function getTipo()
    {
        return $this->_tipo;
    }

    public function Agregar()
    {
        $PDO = Conexion::ConectarDB();
        $sentencia = $PDO->prepare("INSERT INTO lamparitas  VALUES (:tipo, :color, :precio, :path)");
        $sentencia->execute(array("tipo" => $this->_tipo, "color" => $this->_color, "precio" => $this->_precio, "path" => $this->_pathFoto));
        return true;
    }

    public function traerTodas()
    {
        try {
            $lamparita = null;
            $lamparitas = null;
            $PDO = Conexion::ConectarDB();
            $sentencia = $PDO->prepare("SELECT * FROM lamparitas");
            $sentencia->execute();
            while($fila = $sentencia->fetch(PDO::FETCH_ASSOC)) //trae un array asociativo
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

    public function precioConIva()
    {
        $this->_precio += $this->_precio * 0.21;
    }
}
