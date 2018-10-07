<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Empleado
 *
 * @author gdoval
 */

 include_once("Persona.php");

class Empleado extends Persona
{
    //put your code here
    
    protected $_legajo;
    protected $_sueldo;
    protected $_turno;
    protected $_pathFoto;
    
    public function __construct($nombre, $apellido, $dni, $sexo, $legajo, $sueldo, $turno)
    {
       parent::__construct($nombre, $apellido, $dni, $sexo);
       $this->_legajo = $legajo;
       $this->_sueldo = $sueldo;
       $this->_turno = $turno;
    }
    
    public function Hablar(array $idioma)
    {
        $resp = "El empleado habla: " . $idioma[0] . ", " . $idioma[1] . ", " . $idioma[2] . ".";
        return $resp;
    }
    
    public function getLegajo()
    {
        return $this->_legajo;
    }
    
    public function getSueldo()
    {
        return $this->_sueldo;
    }
    
    public function getTurno()
    {
        return $this->_turno;
    }

    public function getPathFoto()
    {
        return $this->_pathFoto;
    }


    public function setPathFoto($ruta)
    {
        $this->_pathFoto = $ruta;
    }
    
    
    public function ToString()
    {
        $resp = parent::ToString() . "-" .$this->getLegajo() . "-". $this->getSueldo() . "-" . $this->getTurno() . "-" . $this->getPathFoto();
        return $resp;
    }
}
?>