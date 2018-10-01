<?php

class cd
{
    public $title;
    public $interprete;
    public $anio;
    public $id;
    function Mostrar()
    {
        return $this->id . "-" . $this->title . "-" . $this->interprete . "-" . $this->anio . "<br>";
    }
}

?>