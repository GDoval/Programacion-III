<?php
require_once 'ovni.php';

$ovni = new Ovni($_POST['tipo'], $_POST['velocidad'], $_POST['planeta']);
$ovni->Agregar();
echo $ovni->toJson();




?>