<?php

$op = isset($_POST["op"]) ? $_POST["op"] : null;
/*$resp = var_dump($_FILES) . var_dump($_POST);
echo $resp;*/

switch ($op) {

    case "subirFoto":

        $objRetorno = new stdClass();
        $objRetorno->Ok = false;

        $destino = "./fotos/" . date("Ymd_His") . ".jpg"; //Setea el nuevo nombre del archivo
        
        if(move_uploaded_file($_FILES["foto"]["tmp_name"], $destino) ){ //Mueve la imagen fuera de la carpeta temporal
            $objRetorno->Ok = true;
            $objRetorno->Path = $destino;
        }

        echo json_encode($objRetorno);

        break;

    default:
        echo ":(";
        break;
}