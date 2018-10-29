<?php
session_start();
require_once 'alien.php';

$mail = $_GET['mail'] . "_" . $_GET['planeta'];
$obj = new stdClass();
if(isset($_COOKIE[$mail]))
{
    $obj->ok = true;
    $obj->mensaje = "Cookie encontrada";
}else
{
    $obj->ok = false;
    $obj->mensaje = "Cookie no encontrada";
}

echo json_encode($obj);


//localhost:8080/Doval.Gaston.3A/clases/mostrarCookie?mail=hola@gmail_com&planeta=Jupiter
?>

