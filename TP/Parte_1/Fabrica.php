<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Fabrica
 *
 * @author gdoval
 */
class Fabrica {
    //put your code here
    
    private $_cantidadMaxima;
    private $_empleados;
    private $_razonSocial;
    
    public function __construct($razonSocial)
    {
        $this->_razonSocial = $razonSocial;
        $this->_cantidadMaxima = 5;
        $this->_empleados = array();
    }
    
    public function AgregarEmpleado($empleado)
    {
        $cant = count($this->_empleados);
        if ($cant < $this->_cantidadMaxima)
        {
            array_push($this->_empleados, $empleado);
        }else
            return -1;
    }
    
    public function ToString()
    {
        /* @var $value Empleado */ //Asi se declara en la IDE que la variable $value es de tipo Empleado. Un casteo, vamos.
        foreach($this->_empleados as &$value)
        {
            echo $value->ToString();
        }
    }
}
