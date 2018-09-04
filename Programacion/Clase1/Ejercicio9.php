<?php     

    for($i = 0; $i < 5 ; $i++)
    {
        $vec[$i] = rand(0, 20);
    }

    $contador = 0;
    $sumador = 0;

    foreach($vec as $clave => $valor)
    {
        $contador++;
        $sumador += $valor;
    }

    $promedio = ($sumador / $contador);

    if($promedio <= 6)
    {
        echo "El promedio es menor o igual a 6 ( " . $promedio . " ) <br>";
    }
    else
    {
        echo "El promedio es mayor a 6 ( " . $promedio . " ) <br>";
    }
?>