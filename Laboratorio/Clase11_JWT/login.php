<?php

function logear($usuario, $pass)
{
    try
    {
        $dsn = "mysql:host=localhost;dbname=test";
        $pdo = new PDO($dsn, 'root', '');
    }catch(Exception $e)
    {
        echo $e->getMessage();
    }
    $query = $pdo->prepare('SELECT * FROM usuarios WHERE password = :pass');
    $query->execute(array("pass" => $pass));
    $pass = $query->fetch(PDO::FETCH_LAZY);
    if($pass)
    {
        $obj= true;
        return $obj;
    }else
    {
        $obj = false;
        return $obj;
    }
}

function validar($token)
{
    $obj = new stdClass();
    try
    {
        $decode = JWT::decode($token, "clavesecreta", ['HS256']);
        $obj->ok = true;
    }catch(Exception $e)
    {
        echo $e->getMessage();
        $obj->ok = false;
    }
    return json_encode($obj);
}

?>