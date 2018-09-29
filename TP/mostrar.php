<?php

include_once("./Parte_1/Empleado.php");

$archivo = fopen("./archivos/empleados.txt", "r") or print_r(error_get_last());
$linea = '';
$array_empleados = array();
$variables_para_obj = array();
rewind($archivo);
while(!feof($archivo))
{
    $linea = fgets($archivo);
    if($linea != FALSE) //Esto evita el clásico error de leer la última línea dos veces
    {
        for($i = 0; $i < 7; $i++)
        {
            $array = explode("-", $linea);
            $foo = explode(":", $array[$i]);
            array_push($variables_para_obj, $foo[1]);
        }
        $obj = new Empleado($variables_para_obj[0],$variables_para_obj[1],$variables_para_obj[2], $variables_para_obj[3], $variables_para_obj[5], $variables_para_obj[4], $variables_para_obj[6]);
        $variables_para_obj = array();
        array_push($array_empleados, $obj);
    }

}

fclose($archivo);

/* @var $value Empleado */
foreach($array_empleados as $value)
{
    echo $value->toString() . "<br/>";
}

?>