<?php

abstract class FiguraGeometrica{

    protected $_color;
    protected $_perimetro;
    protected $_superficie;

    public function __construct()
    {
        $this->_color = "Sin color";
        $this->_perimetro = 0;
        $this->_superficie = 0;
    }

    abstract protected function CalcularDatos();

    abstract public function Dibujar();

    public function GetColor()
    {
        return $this->_color;
    }

    public function SetColor($color)
    {
        $this->_color = $color;
    }

    public function ToString()
    {
        return " Color: " . $this->_color . " Perimetro: " . $this->_perimetro . " Superficie: " . $this->_superficie;
    }
}

?>