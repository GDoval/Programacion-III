<?php
error_reporting(E_ALL);
ini_set("display_errors", "On");
print_r(error_get_last());
interface IVendible
{
    public function precioConIva();
}
?>