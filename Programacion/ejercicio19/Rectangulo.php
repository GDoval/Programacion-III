<?php
include_once "FiguraGeometrica.php";

class Rectangulo extends FiguraGeometrica
{
	private $_base;
	private $_altura;

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
		for($renglon = 1; $renglon <= $this->_base; $renglon++)
		{
			$figura.= "*";
		}
		return $figura;
		/*for($altura = 1; $altura <= $this->_altura; $altura++)
		{
			echo $figura . "<br/>";
		}*/
	}

	protected function CalcularDatos()
	{
		$this->_superficie = ($this->_altura * $this->_base);
		$this->_perimetro = 0;
	}

	public function ToString()
	{
		echo $this->_superficie;
	}
}


?>