<?php
session_start();
if(isset($_SESSION["usuario"]))
{
    $tabla = "<table border=1>
    <tr>
        <th>Nombre</th>
        <th>Foto</th>
    </tr>";
    $archivo = fopen("nombre_foto.txt","r");
    while(!feof($archivo))
    {
        $cadena = fgets($archivo);
        $array = explode("-",$cadena);
        if((trim($array[0])!="") && (trim($array[1])!="") )
        {
            echo $array[1];
            $tabla .= '<tr>
                            <td>' .$array[0]. '</td>
                            <td><img src="fotos/' .trim($array[1]) .'" height="100px" width="100px">
                            </tr>';                     
                            

        }

    }

    fclose($archivo);
    $tabla .="</table>";
    
    $usuario = $_SESSION["usuario"];
    include("listado.html");
}
else
{
    header("location:login.html");
}