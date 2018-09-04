<?php

    include_once "Rectangulo.php";
    include_once "Triangulo.php";

    $Rect = new Rectangulo(8, 4);

    $Rect->Dibujar();

    echo "<br>";

    $Trian = new Triangulo(5, 10);

    //$Trian->Dibujar();

    echo $Rect->ToString();
    echo "<br>";
    echo $Trian->ToString();
    
?>