<?php
session_start();
require_once 'usuarios.php';
$array = Usuario::traerTodos();

$usuario = new Usuario($_POST['mail'], $_POST['clave']);
//var_dump($usuario);
$validar = Usuario::verificarExistencia($usuario);

if($validar)
{
    setcookie($usuario->getMail(),time(), time() + (86400 * 30), "/");
    echo "se encontro y seteo la cookie";
}else
{
    $resp = new stdClass();
    $resp->exito = false;
    $resp->mensaje = "No se encontro al usuario";
    var_dump($resp);
}
?>