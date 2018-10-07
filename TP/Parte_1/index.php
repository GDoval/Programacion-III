<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        error_reporting(E_ALL);
        ini_set("display_errors", "On");
        // put your code here
        require_once 'Persona.php';
        require_once 'Empleado.php';
        require_once 'Fabrica.php';
        $tipito = new Empleado("Illich", "Petrovianiand", 335512616, 'M', 1234, 99999, "Tarde");
        $idioma = array("Arabe", "Latin", "Frances");
        $fabri = new Fabrica(4545454);
        $fabri->AgregarEmpleado($tipito);
        $fabri->TraerDeArchivo("../archivos/empleados.txt");
        $fabri->ToString();
        $fabri->GuardarEnAarchivo("../archivos/empleados2.txt")
        //$chabon = $fabri->_empleados[0]->Hablar($idioma);
        
        ?>
    </body>
</html>
