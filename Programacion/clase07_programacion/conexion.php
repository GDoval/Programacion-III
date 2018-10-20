<?php
try{
    $conStr = 'mysql:host=sql103.tuars.com;dbname=trsc_22874542_prueba'; //Armar la conexion sin espacios en blanco
    $PDO = new PDO($conStr, 'trsc_22874542', 'ffsquall');
    
    }catch(PDOException $e)
    {
        echo $e->getMessage();
    }
$usuario = new stdClass();
$usuario->clave = $_POST['clave'];
$usuario->mail = $_POST['mail'];

//Uso una sentencia preparada para asociar lo que recibo por POST a lo que mando en la query
$sentencia = $PDO->prepare('SELECT * FROM usuarios WHERE mail = :mail');
$sentencia->execute(array('mail'=> $usuario->mail));

//Esto se hace para pasar a un array de objetos stdClass lo que se recibe por la query.
//Si se hace de otra forma pincha: primero se encodea el fetchall, despues se decodea a un array de objetos
$json = json_encode($sentencia->fetchall());
$decode = json_decode($json);


$flag = 0;
foreach($decode as $valor )
{
    if($valor->mail == $usuario->mail)
    {
        echo "Usuario cargado";
        $flag = 1;
        break;
    }
}

if($flag == 0)
{
    echo "El usuario no existe";
}
?>