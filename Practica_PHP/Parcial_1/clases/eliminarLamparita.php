<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
include_once "lamparita.php";

if (isset($_GET['tipo'])) {
    $lampara = new Lamparita();
    $array_lamparas = $lampara->traerTodas();

    foreach ($array_lamparas as $lam) {
        if ($_GET['tipo'] == $lam->tipo) {
            echo "Lampara encontrada, retornando";
            return true;
        }
    }
} else {
    if (isset($_POST['tipo']) && $_POST['accion'] == "borrar") {
        $lampara = new Lamparita();
        $array_lamparas = $lampara->traerTodas();
        foreach ($array_lamparas as $lam) {
            if ($_POST['tipo'] == $lam->tipo)
             {
                $borrame = new Lamparita($lam->tipo, $lam->precio, $lam->color, $lam->path); 
                $extension = pathinfo("./" . $borrame->getPath(), PATHINFO_EXTENSION);
                $foto = $borrame->getPath();
                if (file_exists($foto)) 
                {
                    if (rename($foto, "./archivos/lamparitasBorradas/" . $borrame->getTipo() . ".Borrado." . date('h') . date('i') . date('s') . "." . $extension))
                    {
                    } else
                    {
                        echo "No se pudo mover la foto borrada. ESte es su IF";
                    }
                }else
                {
                    echo "No encontre la foto no encontre";
                }
                $borrame->Eliminar();
                echo "Lampara borrada: " . $lam->path;
                break;
            }
        }
    }
}

//Testeado desde PostMan, resultado = OK
?>