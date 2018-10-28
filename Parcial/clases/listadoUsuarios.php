<?php
require_once 'usuarios.php';
$archivo = fopen("../archivos/usuarios.json", "r");
rewind($archivo);
$linea = '';
$usuarios = array();

while(!feof($archivo))
{
    $linea = fgets($archivo);
    $json = json_decode($linea);
    if($json != false)
    {
        $usuarios[] = $json;
    }
    
}
fclose($archivo);
var_dump(json_encode($usuarios));

?>