<?php

$conexion = myqsli_connect("localhost", "root", "ffsquall");
if($conexion != false)
{
    echo "Conectado";
}else
{
    echo "Falle";
}


?>