<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
include_once "lamparita.php";


$lampara = new Lamparita();
$array_lamparitas = $lampara->traerTodas();

if(file_exists("./archivos/listado.txt")) unlink("./archivos/listado.txt");

$archivo = fopen("./archivos/listado.txt","a+");
$escribo = fwrite($archivo,json_encode($array_lamparitas));

print_r(error_get_last());

//Testeado OK
?>