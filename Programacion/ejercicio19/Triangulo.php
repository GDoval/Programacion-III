<?php

include_once "FiguraGeometrica.php";

class Triangulo extends FiguraGeometrica
{
	private $_altura;
	private $_base;

	public function __construct($a, $b)
	{
		parent::__construct();
		$this->_altura = $a;
		$this->_base = $b;
		$this->CalcularDatos();
	}

	public function Dibujar()
	{
		$figura = "";
		for($i = 1 ; $i < $this->_altura; $i++)
		{
			$figura .= $figura . "*";
			echo $figura . "<br/>";
		}
	}

	protected function CalcularDatos()
	{
		$this->_superficie = 0;
		$this->_perimetro = 0;
	}
}

?>