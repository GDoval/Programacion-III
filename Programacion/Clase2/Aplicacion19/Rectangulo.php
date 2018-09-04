<?php

require_once "FiguraGeometrica.php";

class Rectangulo extends FiguraGeometrica{

    private $_ladoUno;
    private $_ladoDos;

    public function __construct($l1, $l2)
    {
        parent::__construct();
        $this->_ladoUno = $l1;
        $this->_ladoDos = $l2;

        $this->CalcularDatos();
    }

    protected function CalcularDatos()
    {
        $this->_perimetro = ($this->_ladoUno * 2) + ($this->_ladoDos * 2);
        $this->_superficie = ($this->_ladoUno * $this->_ladoDos);
    }

    public function Dibujar()
    {
        for($i = 0; $i < $this->_ladoDos; $i++)
        {
            for($j = 0; $j < $this->_ladoUno; $j++)
            {
                echo "*";
            }

            echo "<br>";
        }
    }

    public function ToString()
    {
        return parent::ToString() . " Lado uno: " . $this->_ladoUno . " Lado dos: " . $this->_ladoDos;
    }
}

?>