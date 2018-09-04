<?php

function PotenciaDeNumeros()
{
    $numero = 0;

    while($numero < 4)
    {
        $numero++;

        for($i = 0; $i < 4; $i++)
        {

            $print = pow($numero, $i);
            
            echo "{$numero} Elevado a {$i} == {$print}<br>";
        }
    }
    
}

?>