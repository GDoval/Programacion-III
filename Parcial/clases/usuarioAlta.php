<?php
require_once 'usuarios.php';

$user = new Usuario($_POST['mail'], $_POST['clave']);
$resp = $user->guardarArchivo();
var_dump($resp);
?>