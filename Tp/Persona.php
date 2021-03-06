<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Persona
 *
 * @author gdoval
 */
abstract class Persona 
{
    private $_apellido;
    private $_dni;
    private $_nombre;
    private $_sexo;
    
    public function __construct($nombre, $apellido, $dni, $sexo)
    {
        $this->_apellido = $apellido;
        $this->_nombre = $nombre;
        $this->_dni = $dni;
        $this->_sexo = $sexo;
    }
    
    public function getNombre()
    {
        return $this->_nombre;
    }
    
    public function getApellido()
    {
        return $this->_apellido;
    }
        
    public function getDni()
    {
        return $this->_dni;
    }
    
    public function getSexo()
    {
        return $this->_sexo;
    }
    
    public abstract function Hablar( array $idioma);
    
    public function ToString()
    {
        $resp = "Nombre: " . $this->_nombre . " - " . "Apellido: " . $this->_apellido . " - " . "DNI: " . $this->_dni  . " - " . "Sexo: " . $this->_sexo;
        return $resp;
    }
    
    
}
