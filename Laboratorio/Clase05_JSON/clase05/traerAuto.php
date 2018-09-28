<?php

$archivo = fopen("autos.json", "r");
$linea = '';
while(!feof($archivo))
{
    $linea .= fgets($archivo);
}
fclose($archivo);

$obj_json = ($linea);
echo $obj_json;