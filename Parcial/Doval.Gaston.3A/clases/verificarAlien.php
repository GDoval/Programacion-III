<?php
session_start();
require_once 'alien.php';

$array = Alien::traerTodos();
$alien = new  Alien($_POST['mail'], $_POST['clave'], $_POST['planeta']);
$validar = Alien::verificarExistencia($alien);
$validar = json_decode($validar);
$cookieNombre = $alien->getMail() . "_" . $alien->getPlaneta();
$cookieValor = date("H:i:s") . $validar->mensaje; 
if($validar->ok == true)
{
    setcookie($cookieNombre, $cookieValor, time() + (86400 * 30), "/");
    header('Location: listadoAliens.php');
}else
{
    $resp = new stdClass();
    $resp->exito = false;
    $resp->mensaje = "No se encontro al alien";
    echo json_encode($resp);
}

?>