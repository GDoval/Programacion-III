<?php
session_start();
$mail = $_GET['mail'];


if(isset($_COOKIE['hola@tarola_com']))
{
    echo "esa :D";
}else
{
    echo "no cookie";
}

?>