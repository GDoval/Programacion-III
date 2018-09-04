<?php     

    //En una sola linea.
    $laparray = array(
        array("Color" => "Verde", "Marca" => "Bic", "Trazo" => "Fino", "Precio" => 1000),
        array("Color" => "Negro", "Marca" => "Bic", "Trazo" => "Grueso", "Precio" => 5000),
        array("Color" => "Azul", "Marca" => "Bic", "Trazo" => "Semi-fino", "Precio" => 9000)
    );

    //En varias lineas (utlizando el arraypush).
    $lap1 = array("Color" => "Verde", "Marca" => "Bic", "Trazo" => "Fino", "Precio" => 1000);
    $lap2 = array("Color" => "Negro", "Marca" => "Bic", "Trazo" => "Grueso", "Precio" => 5000);
    $lap3 = array("Color" => "Azul", "Marca" => "Bic", "Trazo" => "Semi-fino", "Precio" => 9000);

    $lapicera = array();

    array_push($lapicera,$lap1, $lap2, $lap3);

    print var_dump($lapicera) .  "<br><br>";

    print var_dump($laparray);
?>