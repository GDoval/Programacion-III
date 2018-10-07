<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Eliminar</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="estilos.css" />
    <script src="main.js"></script>
</head>
<body>
<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
include_once "./Parte_1/Empleado.php";
include_once "./Parte_1/Fabrica.php";

if (isset($_GET["legajo"])) 
{
    $archivo = fopen("./archivos/empleados.txt", "r") or print_r(error_get_last());
    $linea = '';
    $validar = false;
    $obj = null;
    $variables_para_obj = array();
    if ($archivo != null) 
    {
        while (!feof($archivo)) 
        {
            $linea = trim(fgets($archivo));
            $variables_para_obj = explode("-", $linea);

            if (isset($variables_para_obj[1])) 
            {
                $obj = new Empleado($variables_para_obj[0], $variables_para_obj[1], $variables_para_obj[2], $variables_para_obj[3],
                    $variables_para_obj[4], $variables_para_obj[5], $variables_para_obj[6]);
            }
            if ($obj->getLegajo() == $_GET["legajo"]) 
            {
                $validar = true;
                break;
            }
        }
        fclose($archivo);
    }
    if ($validar) 
    {
        $fabrica = new Fabrica(123);
        $fabrica->TraerDeArchivo("./archivos/empleados.txt");
        $sePudo = $fabrica->eliminarEmpleado($obj);
        if ($sePudo) 
        {
            $fabrica->GuardarEnArchivo("./archivos/empleados.txt");
            $mensaje = 'Se elimino correctamente el empleado';
        } else 
        {
            $mensaje = "No fue posible eliminar al empleado";
        }
    }
}
?>
    <tr>
        <td class="mostrar" > <?php echo $mensaje; ?> </td>
        <br>
        <br>
        <td class="mostrar"> <a class="botonazo" href="index.php">Index</a> </td>
        <td class="mostrar"> <a class="botonazo" href="mostrar.php">Mostrar</a></td>
    </tr>
</body>
</html>

