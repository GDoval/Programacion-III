<?php

$tabla = "<table border=1>
<tr>
    <th>Nombre</th>
    <th>Foto<th>
</tr>";
$archivo = fopen("archivo_fotos.txt", "r");
while(!feof($archivo))
{
    $stringUsuario = fgets($archivo);
    $arrayDeUsuario = explode("-", $stringUsuario);
    if($arrayDeUsuario[0] != "")
    {
        $tabla.= "<tr>
                        <td>" . $arrayDeUsuario[0] . "</td>
                        <td>" . "<img src = '" . "galpon/" . trim($arrayDeUsuario[1]) . "' height = 100px width=100px>" . "</td>
                        </tr>";                
    }
}
fclose($archivo);
$tabla .= "</table>";
echo $tabla;

?>