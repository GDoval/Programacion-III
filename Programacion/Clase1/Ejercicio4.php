<?php 

    $sumador = 0;
    $contador = 0;

    for($i = 1; $sumador < 1000; $i++)
    {
        echo " | " . $i;
        $sumador += $i;
        $contador++;
    }

    echo "<br>" ."<br>" .$contador;
?>