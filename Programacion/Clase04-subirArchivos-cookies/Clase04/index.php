<?php
session_start();
$destino ="fotos/" . $_FILES["archivo"]["name"];
$nombre = $_POST["txtNombre"];
$extension = pathinfo($destino,PATHINFO_EXTENSION);

$destinoNuevo = date("Y_j_n")."_" .$nombre. "." . $extension;
move_uploaded_file($_FILES["archivo"]["tmp_name"],"fotos/" . $destinoNuevo);

$archivo = fopen("nombre_foto.txt","a+");
fwrite($archivo,$nombre."-".date("Y_j_n")."_". $nombre .".". $extension."\r\n");
fclose($archivo);
$_SESSION["usuario"]=$nombre;
echo "Se subio correctamente";
echo '<br> <a href="listado.php">Listado de fotos</a>';





?>