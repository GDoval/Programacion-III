<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
include_once "lamparita.php";

$lampara = new Lamparita($_POST['tipo'], $_POST['precio'], $_POST['color']);
$lampara->Agregar();

$archivo = fopen("./archivos/lamparitas_sin_fotos.txt", "a+");
$fecha = date('l jS \of F Y h:i:s A'); // ->  Sunday 7th of October 2018 04:35:18 PM
fwrite($archivo, $lampara->toString() . "-" . $fecha);
fclose($archivo);
print_r(error_get_last());

//Probado en PostMan, resultado = OK

?>