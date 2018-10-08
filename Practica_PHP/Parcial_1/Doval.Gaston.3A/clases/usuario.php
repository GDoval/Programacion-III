<?php

class Usuario
{
    private $_email;
    private $_clave;

    public function __construct($email, $clave)
    {
        $this->_clave = $clave;
        $this->_email = $email;
    }


    public function toJSON()
    {
        $resp = new stdClass();
        $resp->clave = $this->_clave;
        $resp->email = $this->_email;
        return json_encode($resp); 
    }


    public function guardarEnArchivo()
    {
        $archivo = fopen(".\archivos\usuarios.json", "a+");
        $guardar_json = $this->toJSON();
        $obj = new stdClass();
        if(!fwrite($archivo, $guardar_json))
        {
            $obj->exito = false;
            $obj->mensaje = "Guardado fallo";
        }else
        {
            $obj->exito = true;
            $obj->mensaje = "Guardado OK";
        }

        return json_encode($obj);
    }

    public function traerTodos()
    {
        $archivo = fopen(".\archivos\usuarios.json", "r");
        $linea = '';
        $usuarios = null;
        $user = null;
        while(!feof($archivo))
        {
            $linea = fgets($archivo);
            echo $json->clave;
        }
        return $usuarios;
    }


    public function mostrarTodos()
    {
        $array = $this->traerTodos();
        foreach($array as $value)
        {
            $json = $value->toJSON();
            var_dump($json);
        }
    }

    public static function verificarExistencia($usuario)
    {

    }

    

}

$usu = new Usuario($_POST['email'], $_POST['clave']);
$user = new Usuario("asdasdas", "12345");
$usu->traerTodos();

?>