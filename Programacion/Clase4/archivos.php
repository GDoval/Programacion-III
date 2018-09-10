<?php

$archivo = fopen("miArchivo.txt", "a+");
$nombre = $_POST["nombre"];
fwrite($archivo, $nombre . " " . date('l jS \of F Y h:i:s A') . "<br>");
rewind($archivo);
$leyendo = fread($archivo, filesize("miArchivo.txt"));
echo $leyendo;
fclose($archivo);
?>