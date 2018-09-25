<?php
include_once("./Parte_1/Empleado.php");

$obj = new Empleado("Gaston", "Doval", 33333, "M", 1234, 9999, "Mañana");
echo ($obj->ToString());


?>