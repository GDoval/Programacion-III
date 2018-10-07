<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
include_once "lamparita.php";


$tiempo = date('H i s');
$tipoArchivo = pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION);
$nombreFoto = "lamparitas/imagenes/". $_POST['tipo'] . "." . $_POST['color'] . "." . $tiempo . "." . $tipoArchivo;
$destino = "./" . $nombreFoto;
if(move_uploaded_file($_FILES['foto']['tmp_name'], $destino))
{
    $lampara = new Lamparita($_POST['tipo'], $_POST['precio'], $_POST['color'], $nombreFoto);
    if($lampara->Agregar())
    {
        header("Location: listado.php");
    }else
    {
        echo "No se pudo cargar la imagen en el segundo IF <br>";
        print_r(error_get_last());
    }
}else
{
    echo "No se pudo cargar la imagen en el primer IF <br>";
    print_r(error_get_last());
}

//Testeado por PostMan, resultado OK
?>