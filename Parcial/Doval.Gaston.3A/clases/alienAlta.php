<?php
require_once 'alien.php';

if(isset($_POST['mail']) && isset($_POST['clave']) && isset($_POST['planeta']))
{
    $alien = new Alien($_POST['mail'], $_POST['clave'], $_POST['planeta']);
    $resp = $alien->guardarArchivo();
    echo $resp;
}



?>