<?php

$json = json_decode($_POST['json']);

$obj = new stdClass();
$obj->nombre = "Tushonka";
$obj->precio = 123;
$obj->codigo = "001";
echo json_encode($obj);

?>