<?php
require_once 'ovni.php';

$ovni = new Ovni();
$array = $ovni->Traer();

foreach($array as $value)
{
    echo '<table style="width:100%">
  <tr>
    <th>Tipo</th>
    <th>Velocidad</th> 
    <th>Planeta</th>
    <th> Foto </th>
  </tr>
  <tr>
    <td>' . $value->tipo . '</td>
  </tr>
  <tr>
    <td>'. $value->velocidad . '</td>
  </tr>
  <tr>
    <td> '. $value->planeta . '</td>
  </tr>
  <tr>
    <td> <img source= ' . $value->pathFoto .'></td>
  </tr>
</table>';

}





?>