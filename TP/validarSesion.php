<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
function validarSesion()
{
    session_start();
    if(isset($_SESSION['DNIEmpleado']))
    {
        return true;
    }else
    {
        return false;
    }
}
?>