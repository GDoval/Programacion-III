<?php

function leerdesdeArchivo()
{
    $archivo = fopen("deposito.txt", "r");
    $linea = '';
    $productos = null;
    while (!feof($archivo)) {
        $linea = fgets($archivo);
        if ($linea != false) {
            $productos[] = $linea;
            
        }
    }
    return $productos;
}
?>