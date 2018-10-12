<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");

//Parte 1: generamos un archivo desde el PHP donde guardamos todos los JSON que nos van mandando desde la pagina.
//En el archivo traerJSON.php vamos a intentar retornar un array de JSONs hacia el front end para que podamos verlos por consola

if (isset($_POST['json'])) 
{
    $a = fopen("deposito.txt", "r");
    $linea = '';
    while (!feof($a)) {
        $linea .= fgets($a);
    }
    unlink("deposito.txt");
    $productos = json_decode($linea);
    $producto = json_decode($_POST['json']);
    $productos[] = $producto;
    $archivo = fopen("deposito.txt", "a+");
    $validar = fwrite($archivo, json_encode($productos));
    if($validar != NULL)
    {
        echo "Guardado exitoso perro";
    }else
    {
        echo "No se pudo guardar";
    }
    fclose($archivo);
}

/*El IF de arriba lo que hace es:
1) Abrimos el archivo donde guardamos los JSON para traer todo lo que haya a memoria
2) En memoria se guarda todo en una misma variable de tipo string (no un array). Notese que en el while hacemos un append sobre $linea
3) Borramos el archivo (unlink)
4) Decodificamos todo lo que trajimos del archivo a una variable 
5) Decodificamos en una variable de tipo string el JSON que recibimos por POST (y que viene desde JavaScript o HTML)
6) Añadimos el JSON que recibimos por POST dentro del array donde decodificamos lo que leimos del archivo-> $productos[] = $producto;
7) EScribimos el ARRAY al archivo 
8) Cerramos el archivo y listo, dentro del mismo vamos a ver una sola linea de JSON guardados como array(o sea, empieza con corchete)
*/
?>