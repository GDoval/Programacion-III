<?php 

class Producto
{
    private $_codBarra;
    private $_nombre;

    public function __construct($codigo = 0, $nombre = "")
    {
        $this->_codBarra = $codigo;
        $this->_nombre = $nombre;
    }

    public function GetNombre()
    {
        return $this->_nombre;
    }

    public function GetCodigo()
    {
        return $this->_codBarra;
    }

    public function SetNombre($nombre)
    {
        $this->_nombre = $nombre;
    }

    public function SetCodigo($codigo)
    {
        $this->_codigo = $codigo;
    }


    public function ToString()
    {
        $resp = $this->GetNombre() . "-" . $this->GetCodigo()."\r\n";
        return $resp;
    }

    public static function Guardar($obj)
    {
        if ($obj instanceof producto)
        {
            $archivo = fopen("productos.txt", "a+");
            fwrite($archivo, $obj->ToString());
            fclose($archivo);

        }
    }

    public static function TraerTodos()
    {
        $archivo = fopen("productos.txt", "r");
        rewind($archivo);
        $resp = array();
        while(!feof($archivo))
        {
            $array = explode("-", fgets($archivo));
            $obj = new Producto($array[0], $array[1]);
            $resp->array_push($obj);
        }
        return $resp;
    }
}

?>