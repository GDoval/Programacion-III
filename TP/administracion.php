<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
include_once "./Parte_1/Empleado.php";
include_once "./Parte_1/Fabrica.php";

$obj = new Empleado($_POST['nombre'], $_POST['apellido'], $_POST['dni'], $_POST['sexo'], $_POST['legajo'], $_POST['sueldo'], $_POST['turno']);

$fabrica = new Fabrica(1234);
$fabrica->TraerDeArchivo("./archivos/empleados.txt");


$extension = strtolower(pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION));
$nombreFoto = "./fotos/" . $_POST['dni'] . "_" . $_POST['apellido'] . "." . $extension;
$admitidas = array('jpg', 'jpeg', 'png', 'gif', 'bmp');

//Validar todas las restricciones para la imagen

if(!in_array($extension, $admitidas) || $_FILES['foto']['size'] > 10000000 || file_exists($nombreFoto))
{
    echo "Error al cargar la imagen en el primer IF";
}else
{
    if(!move_uploaded_file($_FILES['foto']['tmp_name'], $nombreFoto))
    {
        echo "Error al cargar la imagen en el segundo IF";
    }
}


$obj->setPathFoto($nombreFoto);
$validar = $fabrica->AgregarEmpleado($obj);
if($validar == 0)
{
    $fabrica->GuardarEnArchivo("./archivos/empleados.txt");
    echo "OK!";
}
?>