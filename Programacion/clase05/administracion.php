<?php

$que_hago = $_POST["que_hago"];

switch($que_hago)
{
    case "conectar":
    $conexion = mysql_connect("localhost", "root", "" );
    if( $conexion != false)
        {
            echo "Conexion establecida";
        }else
        {
            echo "No hay conexion"; 
        }
        break;
    
    case "cerrar":
    $conexion = mysql_connect("localhost", "root", "" );
    if(mysql_close($conexion))
    {
        echo "cerrado OK";
    }else
    {
        echo "No se pudo cerrar la conexion";
    }
    break;

    case "ejecutar":
    $conexion = mysql_connect("localhost", "root", "" );

    //Parametros: base de datos, consulta
    $consulta = "SELECT * FROM cds";
    $devolucion = mysql_db_query("cdcol", $consulta);
    var_dump($devolucion);
    break;

    case "traer_todos":
    $conexion = mysql_connect("localhost", "root", "" );

    //El fetch_object devuelve un objeto por cada fila de la tabla, la columna es el nombre del atributo en el objeto
    $rs = mysql_db_query("cdcol", "SELECT * FROM cds");

    //Asi recorremos cada uno de los objectos que devuelve el fetch
    while($row = mysql_fetch_object($rs))
    {
        var_dump($row);
    }
    break;

    case "traerUno":
    $conexion = mysql_connect("localhost", "root", "" );
    $rs = mysql_db_query("cdcol", "SELECT * FROM cds WHERE id =7");

    //Dice la cantidad de filas que trajo la consulta. Mas de 1, OK. Cero, no bueno.
    $cantidad = mysql_num_rows($rs);
    if($cantidad > 0 )
    {
        $obj = mysql_fetch_object($rs);
        var_dump($obj);
    }else
    {
        echo "No hay registro no hay";
    }
    break;

    case "agregar":
    $conexion = mysql_connect("localhost", "root", "" );
    $titulo = $_POST["titulo"];
    $artista = $_POST["artista"];
    $anio = $_POST["anio"];
    $rs = mysql_db_query("cdcol", "INSERT INTO cds(titel, interpret, jahr) VALUES('".$titulo."', '".$artista."', ".$anio.")");
    echo mysql_insert_id();

}




?>