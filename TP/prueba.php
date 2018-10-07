<?php
include_once("./Parte_1/Empleado.php");
include_once("./Parte_1/Fabrica.php");

$obj = new Empleado("Pepe", "Doval", 33333, "M", 1234, 9999, "Mañana");
$obj2 = new Empleado("Gaston", "Doval", 33333, "M", 1234, 9999, "Mañana");
$obj3 = new Empleado("Juan", "Doval", 33333, "M", 1234, 9999, "Mañana");



$fabrica = new Fabrica(123456);
$fabrica->AgregarEmpleado($obj2);
$fabrica->AgregarEmpleado($obj);
$fabrica->AgregarEmpleado($obj3);
//$fabrica->TraerDeArchivo("./archivos/empleados.txt");
echo count($fabrica->_empleados) . "<br>";

//$validar = $fabrica->AgregarEmpleado($obj);
$fabrica->GuardarEnArchivo("./archivos/empleados.txt");



//$fabrica->GuardarEnArchivo("./archivos/empleados.txt");

$fabrica2 = new Fabrica(3);

$fabrica->TraerDeArchivo("./archivos/empleados.txt");

$fabrica->ToString();
echo count($fabrica->_empleados) . "<br>";

?>