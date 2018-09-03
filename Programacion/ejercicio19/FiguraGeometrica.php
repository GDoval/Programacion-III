<?php

abstract class FiguraGeometrica
{
	protected $_color;
	protected $_perimetro;
	protected $_superficie;

	public function __construct()
	{
		$this->_superficie = 0;
		$this->_perimetro = 0;
	}

	public function setColor($color)
	{
		$this->_color = $color;
	}

	public function getColor()
	{
		return $this->_color;
	}

	public function ToString()
	{
		$resp = "Perimetro: " . $this->_perimetro . "<br/>Superficie: " . $this->_superficie . "<br/>";
		return $resp;
	}

	public abstract function Dibujar();

	protected abstract function CalcularDatos();

}





?>