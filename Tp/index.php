<!DOCTYPE html>
<html>
<head>
<?php
require_once "./Parte_1/Fabrica.php";
$nombrePagina = "Alta de Empleado";
$titulo = "Alta de empleado";
$botonTxt = "Enviar";
$dni = "";
$apellido = "";
$nombre = "";
$sexo = "";
$legajo = "";
$sueldo = "";
$turno = "";
$readOnly = "";
$modificar = false;
if (isset($_POST["modificar"])) {
    $nombrePagina = "Modificar Empleado";
    $titulo = "Modificación de empleado";
    $botonTxt = "Modificar";

    $fabrica = new Fabrica("fabrica");
    $fabrica->TraerDeArchivo("./archivos/empleados.txt");
    $empleados = $fabrica->GetEmpleados();
    foreach ($empleados as $empleado) {
        if ($empleado->getDni() == $_POST["modificar"]) {
            $legajo = $empleado->getLegajo();
            $sueldo = $empleado->getSueldo();
            $turno = $empleado->getTurno();
            $dni = $empleado->getDni();
            $apellido = $empleado->getApellido();
            $nombre = $empleado->getNombre();
            $sexo = $empleado->getSexo();
            $leer = "readonly";
            $modificar = true;
            break;
        }
    }
}
?>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title> <?php echo $nombrePagina; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="estilos.css" />
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <?php
//Se valida que el usuario haya iniciado sesion
include_once "validarSesion.php";
if (!validarSesion()) {
    header('Location: login.html');
}
?>
     <a href = "cerrarSesion.php">Cerrar Sesion</a>
    <form enctype="multipart/form-data" id = "formulario" id="formularioDeAlta">
    <h2> <?php echo $titulo; ?></h2>
    <hr>
        <p>
            <label for="dni">DNI: </label>
            <input id="dni" type="text" min=1000000 max=55000000 value=<?php echo $dni; ?>><span hidden="true" id="spndni">*</span>
        </p>
        <p>
            <label for="Apellido">Apellido: </label>
            <input id="Apellido" type="text" value=<?php echo $apellido; ?>><span hidden="true" id="spnApellido">*</span>
        </p>
        <p>
            <label for="Nombre">Nombre: </label>
            <input id="Nombre" type="text"  value=<?php echo $nombre; ?>><span hidden="true" id="spnNombre">*</span>
        </p>
        <p>
            <label for="sexo">Sexo:</label>
            <select id="sexo">
                <option value="Mujer">Mujer</option>
                <option value= "Hombre">Hombre</option>
                <option value="Indefinido">Indefinido</option>
            </select>
        </p>
        <hr>
        <br>
        <h2>Datos Laborales</h2>
        <p>
            <label for="legajo">Legajo</label>
            <input id="legajo" type="text" min=100 max=550 value=<?php echo $legajo; ?>><span hidden="true" id="spnlegajo">*</span>
        </p>
        <p>
            <label for="Sueldo">Sueldo</label>
            <input id="sueldo" type="number" value=<?php echo $sueldo; ?>><span hidden="true" id="spnsueldo">*</span>
        </p>
        <p>
            <label for="turno">Turno</label><br>
            <p style="text-indent: 45px"><input id="mañana" type="checkbox" value="Mañana">Mañana </p><br>
            <p style="text-indent: 45px"><input id="tarde" type="checkbox" value="Tarde">Tarde</p><br>
            <p style="text-indent: 45px"><input id="noche" type="checkbox" value="Noche">Noche</p><br>
        </p>
        <p>
            <label for="Foto">Foto</label>
            <input type="file" name="foto" id="foto"><span hidden="true" id="spnfoto">*</span>
            <?php
                if ($modificar) {
                            echo '<input type="hidden" name="Modificar" id="Modificar" value=' . $dni . '>';
                            }?>
    </form><hr>
    <script src="funciones.js"></script>
    <button type="button" class="botonazo" >Limpiar</button><br>
    <button type="button" class="botonazo" onclick="todoOK()">Enviar</button>
    <a id="link_a_mostrar" href="javascript:void(0)" hidden="true">Mostrar Empleados</a>

</body>
</html>