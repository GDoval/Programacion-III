<?php

try{
    $conStr = 'mysql:host=localhost;dbname=Prueba'; //Armar la conexion sin espacios en blanco
    $PDO = new PDO($conStr, 'root', 'ffsquall');
    
    }catch(PDOException $e)
    {
        echo $e->getMessage();
    }

$sentencia = $PDO->prepare('SELECT * FROM Empleados');
$sentencia->execute();
while($fila = $sentencia->fetch())
{
    var_dump($fila);
    echo "<br>";
}

?>