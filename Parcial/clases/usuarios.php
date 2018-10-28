<?php

class Usuario
{
    private $mail;
    private $clave;

    public function __construct($mail, $clave)
    {
        $this->mail = $mail;
        $this->clave = $clave;
    }

    public function toJSON()
    {
        $resp = new stdClass();
        $resp->clave = $this->clave;
        $resp->mail = $this->mail;
        return json_encode($resp);
    }

    public function getMail()
    {
        return $this->mail;
    }

    public function getClave()
    {
        return $this->clave;
    }

    public function guardarArchivo()
    {
        $archivo = fopen("../archivos/usuarios.json", "a+");
        $guardar_json = $this->toJSON();
        if (!fwrite($archivo, $guardar_json . "\n")) {
            $obj->exito = false;
            $obj->mensaje = "Guardado fallo";
        } else {
            $obj->exito = true;
            $obj->mensaje = "Guardado OK";
        }
        return json_encode($obj);
    }

    public static function traerTodos()
    {
        $archivo = fopen("../archivos/usuarios.json", "r");
        rewind($archivo);
        $linea = '';
        $usuarios = null;
        while (!feof($archivo)) {
            $linea = fgets($archivo);
            $json = json_decode($linea, true);
            if ($json != false) {

                $obj = new Usuario($json['mail'], $json['clave']);
                $usuarios[] = $obj;
            }
        }
        fclose($archivo);
        return $usuarios;
    }

    public static function verificarExistencia($usuario)
    {
        $usuarios = Usuario::traerTodos();
        foreach ($usuarios as $value) {
            if ($value->getMail() == $usuario->getMail()) {
                return true;
            }
        }
        return false;
    }

    public function mostrarTodos()
    {
        $array = $this->traerTodos();
        foreach ($array as $value) {
            $json = $value->toJSON();
            var_dump($json);
        }
    }
}
