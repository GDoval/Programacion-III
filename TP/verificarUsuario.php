<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Verificar Usuario</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="estilos.css" />
    <script src="main.js"></script>
</head>
<body>
<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
include_once "./Parte_1/Empleado.php";
include_once "./Parte_1/Fabrica.php";
session_start();
if (isset($_POST["dni"]) && isset($_POST["apellido"])) {
    $validar = false;
    if (file_exists("./archivos/empleados.txt")) {
        $archivo = fopen("./archivos/empleados.txt", "r");
        while (!feof($archivo)) {
            $linea = fgets($archivo);
            $array_campos = explode("-", $linea);
            if (isset($array_campos[1])) {
                if ($array_campos[1] == $_POST['apellido'] && $array_campos[2] == $_POST['dni']) {
                    $validar = true;
                    break;
                }
            }
        }
    }
    fclose($archivo);
    if ($validar) {
        $_SESSION['DNIEmpleado'] = $_POST['dni'];
        header("Location: mostrar.php");
        echo "?";
    } else {
        echo "<h3>El empleado ingresado no existe</h3><br>";
        echo "<a href=login.html>Login</a>";
    }

}
?>
</body>
</html>