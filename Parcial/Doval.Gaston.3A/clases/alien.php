<?php
class Alien
{
    private $mail;
    private $clave;
    private $planeta;

    public function __construct($mail, $clave, $planeta)
    {
        $this->mail = $mail;
        $this->clave = $clave;
        $this->planeta = $planeta;
    }
    public function toJSON()
    {
        $resp = new stdClass();
        $resp->clave = $this->clave;
        $resp->mail = $this->mail;
        $resp->planeta = $this->planeta;
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

    public function getPlaneta()
    {
        return $this->planeta;
    }
    public function guardarArchivo()
    {
        $archivo = fopen("../archivos/alien.json", "a+");
        $guardar_json = $this->toJSON();
        $obj = new stdClass();
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
        $archivo = fopen("../archivos/alien.json", "r");
        rewind($archivo);
        $linea = '';
        $usuarios = null;
        while (!feof($archivo)) {
            $linea = fgets($archivo);
            $json = json_decode($linea, true);
            if ($json != false) {
                $obj = new Alien($json['mail'], $json['clave'], $json['planeta']);
                $usuarios[] = $obj;
            }
        }
        fclose($archivo);
        return $usuarios;
    }
    public static function verificarExistencia($alien)
    {
        $aliens = Alien::traerTodos();
        $obj = new stdClass();
        $obj->cont = 0;
        $flag = 0;
        foreach ($aliens as $value) {
            if ($value->getMail() == $alien->getMail()  && $value->getClave() == $alien->getClave()) {
                $obj->ok = true;
                $obj->mensaje = "Alien encontrado";
                $flag = 1;
                foreach($aliens as $valor)
                {
                    if($valor->getPlaneta() == $alien->getPlaneta())
                    {
                        $obj->cont++; 
                    }
                }
                break;
            }
        }
        if($flag == 0)
        {
            $obj->ok = false;
            $obj->mensaje = "No se encontro alien";
            $obj->popular = Alien::buscarMaximo($aliens);
        }
        return json_encode($obj);
    }

    public static function buscarMaximo($array)
    {
        $contadores = array();
        $contadores[0] = 0;
        $contadores[1] = 0;
        $contadores[2] = 0;
        $contadores[3] = 0;
        foreach($array as $value)
        {
            switch($value->getPlaneta())
            {
                case "Mercurio":
                $contadores[0]++;
                break;
                case "Venus":
                $contadores[1]++;
                break;
                case "Marte":
                $contadores[2]++;
                break;
                case "Jupiter":
                $contadores[3]++;
                break;
            }
        }
        $popular = max($contadores);
        if($popular == $contadores[0])
        {
            return "Mercurio";
        }else
        {
            if($popular == $contadores[1])
            {
                return "Venus";
            }else
            {
                if($popular == $$contadores[2])
                {
                    return "Marte";
                }else
                if($popular == $$contadores[3])
                {
                    return "Jupiter";
                }
            }
        }
    }

}


?>