<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");

interface IArchivo
{
    public function TraerDeArchivo($nombreArchivo);

    public function GuardarEnArchivo($nombreArchivo);
}
?>