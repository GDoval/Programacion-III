<?php
require_once "./cd.php";

//Se arma la conexion a la base de datos

try{
$conStr = 'mysql:host=localhost;dbname=cdcol'; //Armar la conexion sin espacios en blanco
$PDO = new PDO($conStr, 'root', '');

}catch(PDOException $e)
{
    echo $e->getMessage();
}


//Traemos cosas desde la DB desde un stored procedure

/*$id = $_POST['id'];
$sentencia = $PDO->prepare('SELECT * FROM cds WHERE id > :id');
$sentencia->execute(array('id'=> $id));
while($fila = $sentencia->fetch())
{
    var_dump($fila);
}*/

//El FETCH_LAZY devuelve un objeto sin metodos. Se tiene que llamar desde la variable que almacena el retorno de la query hecha desde el objeto de tipo PDO
$sentencia = $PDO->query('SELECT titel as title, interpret as interprete, jahr as anio, id as id FROM cds');
/*$resp = "[";
while($fila = $sentencia->fetch(PDO::FETCH_LAZY))
{   
     $resp .= JSON_encode($fila) . ","; //Encodea el objeto LAZY retornado y lo pasa a JSON
}
$resp = substr($resp, 0,(strlen($resp) - 1)); //Saca la ultima coma que se puso dentro del while. Reemplaza la cadena desde cero (comienzo) hasta strlen -1
$resp .= "]";*/
//echo $resp;

/*$json = JSON_encode($sentencia->fetchall()); //Esto trae todo de una sin necesidad de hacer el while
echo $json;*/

$sentencia->setFetchMode(PDO::FETCH_INTO, new cd); //Trae los valores de la query y los pasa a una clase. Esto en formato de array
foreach($sentencia as $value)
{
    echo $value->Mostrar();
}




?>