<?php

require_once 'alien.php';


$alien = new Alien("asd@qwasdasdadaderty.com", "abcd", "Venus");
$json = Alien::verificarExistencia($alien);
echo $json;
?>