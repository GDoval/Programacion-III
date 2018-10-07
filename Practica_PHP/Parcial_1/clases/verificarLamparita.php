<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
include_once "lamparita.php";

$lampara = new Lamparita();
$array_lamparitas = $lampara->traerTodas();
$flag = true;
foreach($array_lamparitas as $lamp)
{
    if($_GET['tipo'] == $lamp->tipo && $_GET['color'] == $lamp->color)
    {
        $buffer = new Lamparita($_GET['tipo'], $lamp->precio, $_GET['color'], $lamp->path);
        $buffer->precioConIva();
        $flag = false;
        echo $buffer->toString();
        break;
    }
}
if($flag)
{
    echo "No se encontraron coincidencias";
}


//Probado con PostMan, resultado = OK
?>