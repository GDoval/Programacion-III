<?php 

    $operador = "*";

    $op1 = 2;
    $op2 = 3;

    $resultado = 0;

    switch($operador)
    {
        case "+":
        $resultado = $op1 + $op2;
        break;

        case "-":
        $resultado = $op1 - $op2;
        break;

        case "/":
        $resultado = $op1 / $op2;
        break;

        case "*":
        $resultado = $op1 * $op2;
        break;
    }

    echo "Resultado : " . $resultado;
?>