<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Empleados</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="estilos.css" />
</head>
<body>
    <?php
        error_reporting(E_ALL);
        ini_set("display_errors", "On");
        include_once "validarSesion.php";

    //Se valida que el usuario haya iniciado sesion

    if(!validarSesion())
    {
        header('Location: login.html');
    }else
    {
        include_once "./Parte_1/Empleado.php";
        include_once "./Parte_1/Fabrica.php";
    }

    ?>
     <a href = "index.php">Index</a>
     <a href = "cerrarSesion.php">Cerrar Sesion</a>
    <div align="center">
        <table>
            <tr>
                <th align="left"  colspan="10">
                    <h2> Listado de Empleados </h2>
                </th>
            </tr>
                <th align="left" colspan="10">
                    <h4> Datos</h4>
                    <hr />
            </tr>
            <?php
        
        $fabrica = new Fabrica(123456);
        $fabrica->TraerDeArchivo("./archivos/empleados.txt");
        $empleados = $fabrica->getEmpleados();
        foreach ($empleados as $value){
            ?>
                <tr> 
                    <td class="mostrar" colspan="1"> <?php echo $value->getNombre(); ?></td>
                    <td class="mostrar" > <?php echo $value->getApellido(); ?> </td>
                    <td class="mostrar" > <?php echo  $value->getDni();?> </td>
                    <td class="mostrar" > <?php echo $value->getSexo(); ?> </td>
                    <td class="mostrar" > <?php echo  $value->getLegajo(); ?> </td>
                    <td class="mostrar" > <?php echo  "$".$value->getSueldo(); ?> </td>
                    <td class="mostrar" > <?php echo $value->getTurno(); ?> </td> 
                    <td class="mostrar">  <img height="90px" width="90px" src=<?php echo $value->getPathFoto();?> /></td>
                    <td class="mostrar" > <a class="botonazo" href="eliminar.php?legajo=<?php echo  $value->getLegajo(); ?>">Eliminar...</a>
                    <td class="mostrar" > <input type="button" value="Modificar"  onclick="AdministrarModificar(<?php echo  $value->getDni(); ?>)">
                    <br/>
                    <br>
                </tr>
                <?php

        }
        ?>
        </table>
    </div>
    <form id="Modificar" action="index.php" method="POST">
    <input type="hidden" name="modificar" id="modificar">
</form>
</body>
</html>