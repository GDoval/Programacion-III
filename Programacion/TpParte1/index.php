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
        // put your code here
        require_once 'Persona.php';
        require_once 'Empleado.php';
        require_once 'Fabrica.php';
        $tipito = new Empleado("Gaston", "Doval", 33712616, 'M', 1234, 99999, "12/09/2018");
        $idioma = array("Arabe", "Latin", "Frances");
        $fabri = new Fabrica(4545454);
        $fabri->AgregarEmpleado($tipito);
        $fabri->ToString();
        ?>
    </body>
</html>
