<?php 

    $a = 1;
    $b = 5;
    $c = 1;

    if($a < $b && $a > $c || $a > $b && $a < $c)
    {
        $medio = $a;   
    }
    else if($b < $a && $b > $c || $b > $a && $b < $c)
    {
        $medio = $b;
    }
    else if($c < $a && $c > $b || $c > $a && $c < $b)
    {
        $medio = $c;
    }
    else
    {
        $medio = "No existe valor medio";
    }

    echo $medio;
?>