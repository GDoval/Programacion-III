<?php

require_once 'IParte2.php';
class Ovni implements IParte2
{
    public $tipo;
    public $velocidad;
    public $planetaOrigen;
    public $pathFoto;

    public function __construct($tipo = 'verde', $velocidad = 'mucha', $planetaOrigen = "marte", $path = '')
    {
        $this->tipo = $tipo;
        $this->velocidad = $velocidad;
        $this->planetaOrigen = $planetaOrigen;
        $this->pathFoto = $path;
    }

    public function toJson()
    {
        return json_encode($this);
    }


    public function Agregar()
    {
        $servidor = "127.0.0.1";
        $base = "alien_bd";
        $user = "root";
        $pass = "";
        $charset = "utf8mb4";
        $dsn = "sqlsrv:host=$servidor;dbname=$base;charset=$charset";
        $pdo = new PDO($dsn, $user, $pass);
        $sentencia = $pdo->prepare('INSERT INTO ovnis (tipo, velocidad, planeta, foto) VALUES (:tipo, :velocidad, :planeta, :foto');
        $validar = $sentencia->execute(array('tipo' => $this->tipo, 'velocidad' => $this->velocidad, 'planeta' => $this->planeta, 'foto' => $this->foto));
        return $validar;
    }

    public function Traer()
    {
        $servidor = "127.0.0.1";
        $base = "alien_bd";
        $user = "root";
        $pass = "";
        $charset = "utf8mb4";
        $dsn = "sql:host=$servidor;dbname=$base;charset=$charset";
        $pdo = new PDO($dsn, $user, $pass);

        $sentencia = $pdo->prepare('SELECT * FROM ovnis');
        $sentencia->execute();
        $array = $sentencia->fetch(PDO::FETCH_LAZY);
        return $array;
    }

    public function ActivarVelocidadWarp()
    {
        $this->velocidad = $this->velocidad * 10.5;
    }
}