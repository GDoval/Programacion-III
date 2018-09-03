<?php
include_once "Triangulo.php";
include_once "Rectangulo.php";
 //$trian = new Triangulo(4, 5);
$alt = 5;
 $recta = new Rectangulo($alt, 45);
 $imprimo = $recta->Dibujar();
 for($altura = 1; $altura <=$alt; $altura++)
{
	echo $imprimo . "<br/>";
}
echo $recta->ToString();
?>