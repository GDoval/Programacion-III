<?php

$nombre = $_POST["nombre_archivo"];
$fecha = date("Y_m_d");
$destino = "galpon/" . $_FILES["archivo"]["name"];
$extension = pathinfo($destino, PATHINFO_EXTENSION);
$archivo = fopen("archivo_fotos.txt", "a+");

$nuevoNombreFoto= $fecha . "_" . $_FILES["archivo"]["name"];
fwrite($archivo, $nombre . "-" . $fecha . "_" . $_FILES["archivo"]["name"] . "\r\n");
fclose($archivo);

$destino = "galpon/" . $nuevoNombreFoto;
move_uploaded_file($_FILES["archivo"]["tmp_name"], $destino);

?>