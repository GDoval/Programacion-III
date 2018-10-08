<?php

include_once("usuario.php");


$user = new Usuario("1","2");
$usuarios = $user->traerTodos();

$archivo = fopen(".\archivos\usuarios.json", "r");
$linea = '';
$usuarios = null;
$obj = null;
while(!feof($archivo))
{
    $linea = fgets($archivo);
    $json = json_decode($linea, true);
    $obj = new Usuario($json['email'], $json['clave']);
    $usuarios[] = $obj;
}
echo json_encode($usuarios);
fclose($archivo);

?>