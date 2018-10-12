<?php

include_once("usuario.php");

$user = new Usuario($_POST['email'], $_POST['clave']);
if($user->verificarExistencia())
{
    //Hago la cookie
}else
{
    $obj = new stdClass();
    $obj->exito = false;
    $obj->mensaje = "No esta ese usuario cargado";
    return json_encode($obj);
}

?>