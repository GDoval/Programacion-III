<?php
include_once("Empleado.php");

$obj = new Empleado("Gaston", "Doval", 33333, "M", 1234, 9999, "Mañana");
echo ($obj->ToString());


?>