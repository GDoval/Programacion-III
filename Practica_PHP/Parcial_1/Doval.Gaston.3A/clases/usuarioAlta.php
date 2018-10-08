<?php

include_once("usuario.php");

$user = new Usuario($_POST['email'], $_POST['clave']);
$user->guardarEnArchivo();
?>