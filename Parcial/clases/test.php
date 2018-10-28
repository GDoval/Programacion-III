<?php

require_once 'usuarios.php';

$array = Usuario::traerTodos();
$json = '[';
foreach($array as $value)
{
    $json .= $value->toJson() . ",";
}

$json = substr($json, 0,(strlen($json) - 1));
$json .= ']';

file_put_contents("../archivos/array.json",$json);

?>