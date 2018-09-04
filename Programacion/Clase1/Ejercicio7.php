<?php     

    date_default_timezone_set("America/Argentina/Buenos_Aires");

    echo date('l jS \of F Y h:i:s A');

    $mes = date('F');

    switch($mes)
    {
        case "January":
        $estacion = "Verano";
        break;

        case "February":
        $estacion = "Verano";
        break;

        case "March":
        $estacion = "Otoño";
        break;

        case "April":
        $estacion = "Otoño";
        break;

        case "May";
        $estacion = "Otoño";
        break;

        case "June":
        $estacion = "Otoño";
        break;

        case "July":
        $estacion = "Invierno";
        break;

        case "August":
        $estacion = "Invierno";
        break;

        case "September":
        $estacion = "Invierno";
        break;

        case "October":
        $estacion = "Primavera";
        break;

        case "November":
        $estacion = "Primavera";
        break;

        case "December":
        $estacion = "Verano";
        break;
    }

    echo "<br><br>Estación actual: " . $estacion;
?>