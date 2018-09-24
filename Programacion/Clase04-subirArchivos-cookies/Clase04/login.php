<?php
session_start();
$nombre = $_POST["txtNombre"];
$archivo = fopen("nombre_foto.txt","r");
while(!feof($archivo))
{
    $cadena = fgets($archivo);
    $array = explode("-",$cadena);
    if($nombre == $array[0])
    {
        $_SESSION["usuario"]=$nombre;
        header("location:listado.php");
        break;
    }
    else
    {
        $se
        header("location:index.html");
        break;
    }

}
