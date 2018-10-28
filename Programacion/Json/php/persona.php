<?php

class Persona
{
    public $nombre;
    public $apellido;
    public $pais;

    public function __construct($nombre, $apellido, $pais)
    {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->pais = $pais;
    }

    public function toString()
    {
        return $this->nombre . "-" . $this->apellido . "-" . $this->pais;
    }


    public function toJson()
    {
        $resp = json_encode($this);
        return $resp;
    }
}
