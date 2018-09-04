<?php

class Garage{

    private $_razonSocial;
    private $_precioPorHora;
    private $_autos;

    public function __constructor($razonSocial, $_precioPorHora = null)
    {
       $this->_razonSocial = $razonSocial;
       $this->_precioPorHora = $_precioPorHora; 
    }

    public static function MostrarGarage()
    {
        return "Razón social: " . $this->_razonSocial . " Precio por hora: " . $this->_precioPorHora . " Autos: " . $this->_autos;
    }

}

?>