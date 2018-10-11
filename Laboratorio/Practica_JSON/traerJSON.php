<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");

$a = fopen("deposito.txt", "r");
$linea = '';
while (!feof($a))
{
    $linea .= fgets($a);
}
$productos = json_decode($linea);
echo json_encode($productos);

/*Este script se encarga de lo siguiente:
1) Trae a memoria todos los JSON contenidos dentro del archivo. Notar el append en $linea dentro del while
2) Usa json_decode para generar un array de tipo stdClass con todo lo que se leyó del archivo. Notar que hacer echo json_decode($linea) genera un error de sintaxis
del lado del front-end
3) Hace un json_encode del array para pasarlo como string hacia el front-end. En este caso lo recibe el script recibirJSON.ts
*/
?>