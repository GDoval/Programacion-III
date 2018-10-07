<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
class Conexion
{
    public static function ConectarDB()
    {
        try
        {
            $conStr = 'mysql:host=localhost;dbname=lamparitas_bd'; //Armar la conexion sin espacios en blanco
            $PDO = new PDO($conStr, 'root', 'ffsquall');
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        return $PDO;
    }
}
