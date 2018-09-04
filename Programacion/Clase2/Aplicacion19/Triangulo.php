<?php

require_once "FiguraGeometrica.php";

class Triangulo extends FiguraGeometrica{

    private $_altura;
    private $_base;

    public function __construct($b, $h)
    {
        parent::__construct();
        $this->_altura = $h;
        $this->_base = $b;

        $this->CalcularDatos();
    }

    protected function CalcularDatos()
    {
        $this->_perimetro = ($this->_base * 3);
        $this->_superficie = ($this->_base * $this->_altura) / 2;
    }

    public function Dibujar()
    {

    }   

    public function ToString()
    {
        return parent::ToString() . " Altura: " . $this->_altura . " Base: " . $this->_base;
    }
}

?>