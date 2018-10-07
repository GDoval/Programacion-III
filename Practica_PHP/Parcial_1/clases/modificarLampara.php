<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
include_once "lamparita.php";


$tipoArchivo = pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION);
$nombreFoto = "archivo/lamparitasModificadas/". $_POST['tipo'].".".$_POST['color'].".".date('h').date('i').date('s').".".$tipoArchivo;
$destino = "./" . $nombreFoto;
if(move_uploaded_file($_FILES['foto']["tmp_name"], $destino))
{
    $lamparita = New Lamparita($_POST['tipo'],$_POST['precio'],$_POST['color'],$fotoFinalName);
    if(Lamparita::Modificar($lamparita))
    {
        header('Location:./Listado.php');
    }else
    {
        echo "Error al cargar la bd";
    }
}
?>