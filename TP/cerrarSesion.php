<?php

session_start();
if(isset($_SESSION['DNIEmpleado']))
{
    session_destroy();
}
header("Location: login.html");

?>