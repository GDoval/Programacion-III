<?php 

    $nombre = "Juan Manuel";
    $apellido = "Figueiras";

    echo "su nombre es " . $nombre . "<br>";

    echo "su nombre es $nombre<br>"; //Muestra la variable.
    echo 'Su nombre es $nombre<br>'; //No muestra la variable.

    echo "su nombre es {$nombre}<br>"; //Muestra la variable.
    echo 'su nombre es {$nombre}<br>'; //No muestra la variable.

    /*Las comillas simples  son engañosas, solamente puedo mostrar
                los datos si concateno las variables */

    print $apellido . ", " . $nombre ;
?>