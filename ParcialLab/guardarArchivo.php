<?php

if (isset($_POST['tipo'])) 
{
    $a = fopen("gente.txt", "r");
    $linea = '';
    while (!feof($a)) {
        $linea .= fgets($a);
    }
    unlink("gente.txt");
    $personas = json_decode($linea);
    $persona = json_decode($_POST['tipo']);
    $personas[] = $producto;
    $archivo = fopen("gente.txt", "a+");
    $validar = fwrite($archivo, json_encode($personas));
    if($validar != NULL)
    {
        echo "Guardado exitoso perro";
    }else
    {
        echo "No se pudo guardar";
    }
    fclose($archivo);
}
var_dump($_POST);
?>