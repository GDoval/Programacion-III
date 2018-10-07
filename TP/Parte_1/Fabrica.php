<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
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

require_once "interfaces.php";

class Fabrica implements IArchivo
{
    //put your code here

    private $_cantidadMaxima;
    private $_empleados;
    private $_razonSocial;

    public function __construct($razonSocial)
    {
        $this->_razonSocial = $razonSocial;
        $this->_cantidadMaxima = 3;
        $this->_empleados = array();
    }

    public function AgregarEmpleado($empleado)
    {
        $cant = count($this->_empleados);
        if ($cant < $this->_cantidadMaxima) {
            array_push($this->_empleados, $empleado);
            return 0;
        } else {
            return -1;
        }

    }

    public function ToString()
    {
        /* @var $value Empleado */
        foreach ($this->_empleados as $value) {
            echo $value->ToString();
            echo "<br>";
        }
    }

    public function SetearMaximo($max)
    {
        if ($max > 0)
        {
            $this->_cantidadMaxima = $max;
        }
    }

    public function getEmpleados()
    {
        return $this->_empleados;
    }

    public function TraerDeArchivo($nombreArchivo) // Funciona

    {
        $archivo = fopen($nombreArchivo, "r") or print_r(error_get_last());
        $this->_empleados = array();
        $linea = '';
        $variables_para_obj = array();
        if ($archivo != null) {
            while (!feof($archivo)) {
                $linea = trim(fgets($archivo));
                $variables_para_obj = explode("-", $linea);
                if (isset($variables_para_obj[1])) {
                    $obj = new Empleado($variables_para_obj[0], $variables_para_obj[1], $variables_para_obj[2], $variables_para_obj[3], $variables_para_obj[4], $variables_para_obj[5], $variables_para_obj[6]);
                    $obj->setPathFoto($variables_para_obj[7]);
                    $this->AgregarEmpleado($obj);
                }
            }
            fclose($archivo);
        }
    }

    public function GuardarEnArchivo($nombreArchivo) // Funciona
    {
        $archivo = fopen($nombreArchivo, "w+") or print_r(error_get_last());
        foreach ($this->_empleados as $value) {
            $escribir = trim($value->ToString()) . "\n";
            fwrite($archivo, $escribir);
        }
        fclose($archivo);
    }



    public function eliminarEmpleado($empleado)
    {
        $resp = false;
        for($i = 0; $i < count($this->_empleados); $i++)
        {
            if($empleado->getLegajo() == $this->_empleados[$i]->getLegajo())
            {
                unlink(trim($this->_empleados[$i]->getPathFoto()));
                unset($this->_empleados[$i]);
                $resp = true;
                break;
            }
        }
        return $resp;
    }
}
