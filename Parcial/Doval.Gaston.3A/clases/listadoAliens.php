<?php
session_start();
require_once 'alien.php';
var_dump($_COOKIE);
$array = Alien::traerTodos();
foreach ($array as $value) {
    $json = $value->toJSON();
    echo $json . "\n";
}
?>