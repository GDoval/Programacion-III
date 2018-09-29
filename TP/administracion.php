<?php

include_once("./Parte_1/Empleado.php");
$obj = new Empleado($_POST['nombre'],$_POST['apellido'],$_POST['dni'], $_POST['sexo'],$_POST['legajo'], $_POST['sueldo'], $_POST['turno']);
$link = '<a href= "mostrar.php">Mostrar Empleados</a>';
//Tomar en cuenta los permisos sobre el directorio donde alojamos el proyecto. En este caso hubo que hacer un chmod recursivo (-R) sobre el directorio para poder crear el archivo
$archivo = fopen("./archivos/empleados.txt", "a+") or print_r(error_get_last());
$escribir = $obj->ToString() . "\n";
$validar = fwrite($archivo, $escribir);
fclose($archivo);
if ($validar == FALSE)
{
    echo "No bueno";
}else
{
    echo $link;
}
?>