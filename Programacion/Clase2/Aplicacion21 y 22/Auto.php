<?php

class Auto{

    private $_color;
    private $_precio;
    private $_marca;
    private $_fecha;

    //Para llamar a la creación, hay que respertar el orden de los párametros.
    //Ej: $auto = new Auto("Renault", null, 0, null);

    public function __constructor($marca, $color = null, $precio = 0, $fecha = null)
    {
        $this->_color = $color;
        $this->_precio = $precio;
        $this->_marca = $marca;
        $this->_fecha = $fecha;
        //$this->_fecha = date('l \t\h\e jS');
    }

    public static function AgregarImpuestos($double)
    {
        $this->_precio += $double;
    }

    public static function MostrarAuto($auto)
    {
        return "Color : " . $this->_color . " Precio: " . $this->_precio . " Marca: " . $this->_marca . " Fecha: " . $this->_fecha;
    }

    public function Equals($auto1, $auto2)
    {
        $retornador = false;

        if($auto1->_marca == $auto2->_marca)
        {
            $retornador = true;
        }

        return $retornador;
    }

    public static function Add($auto1, $auto2)
    {
        $retornador = 0;

        if($this->Equals($auto1, $auto2) && ($auto1->_color == $auto2->_color))
        {
            $retornador = ($auto1->_precio + $auto2->_precio);
        }

        return $retornador;
    }
}