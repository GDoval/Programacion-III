<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
include_once("lamparita.php");

$lamp = new Lamparita("UV", 156, "AZUL", "pathATuHermana");
$lamp2 = new Lamparita();
/* $lamp2->Agregar();
$lamp->Agregar(); */
$array_lamparitas = $lamp->traerTodas();
foreach($array_lamparitas as $lampari)
{
    echo $lampari->toString();
    echo "<br>";
}

echo "Despues de borrar a tuHermana" . "<br>";

$lamp->Eliminar();

$array_lamparitas = $lamp->traerTodas();
foreach($array_lamparitas as $lampari)
{
    echo $lampari->toString();
    echo "<br>";
}
?>