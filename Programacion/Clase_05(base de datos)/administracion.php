<?php
$titulo =$_POST["titulo"];
$interprete =$_POST["interprete"];
$anio = $_POST["anio"];
$id = $_POST["id"];
$extension = pathinfo($_FILES["foto"]["name"],PATHINFO_EXTENSION);
$foto = date("Y_j_n")."_" .$titulo. "." . $extension;
$destino ="./fotos/cds/".$foto;

switch($_POST["que_hago"])
{
    case "conectarme":
    //abre la coneccion con la base de datos ,(servidor,usuario,password)
    //devuelve un recurso
        $mysqlConection=mysql_connect("localhost","root","");
        if($mysqlConection!=false)
        {
            echo "me conecte<br>";
        }
        else
        {
            echo "no me pude conectar<br>";
        }
        if(mysql_close($mysqlConection))
        {
            echo "se cerro correctamente<br>";
        }
        else
        {
            echo "no se cerro";
        }
        break;

    case "ejecutar":
        $mysqlConection=mysql_connect("localhost","root","");
        if($mysqlConection!=false)
        {
            echo "me conecte<br>";
            //ejecuta una consulta en mySql (BASE DE DATOS, cual es la consulta)
            //devuelve un recurso , por eso se muestra un var_dam y si no puedo devuelve false
            var_dump(mysql_db_query("cdcol","SELECT * from cds"));
        }
        else
        {
            echo "no me pude conectar<br>";
        }
        break;
    case "traerTodos":
        $mysqlConection=mysql_connect("localhost","root","");
        if($mysqlConection!=false)
        {
            echo "me conecte<br>";
            //ejecuta una consulta en mySql (BASE DE DATOS, cual es la consulta)
            //devuelve un recurso , por eso se muestra un var_dam y si no puedo devuelve false
            $rs = mysql_db_query("cdcol","SELECT * from cds");
            //devuelve un objeto con las columnas como atributos , cuando termine de devolver las filas de mi tabla , devuelve false//
            //mysql_fetch_object devuelve solo 1 elemento de mi tabla por eso se usa el while
            while($row=mysql_fetch_object($rs))
            {
                var_dump($row);

            }
        }
        else
        {
            echo "no me pude conectar<br>";
        }

        break;
    case "traerUno":
    {
        $mysqlConection=mysql_connect("localhost","root","");
        if($mysqlConection!=false)
        {
            echo "me conecte<br>";
            //ejecuta una consulta en mySql (BASE DE DATOS, cual es la consulta)
            //devuelve un recurso , por eso se muestra un var_dump y si no puedo devuelve false
            //se puede poner un @ adelante de cada funcion para que no muestre los warning
            $rs = mysql_db_query("cdcol","SELECT * from cds WHERE id=10");
            //devuelve un objeto con las columnas como atributos 
            //mysql_num_rows  me devuelve si mi elemento que quiero buscar no existe en la tabla
            if(mysql_num_rows($rs)>0)
            {
                //mysql_fetch_object devuelve solo 1 elemento de mi tabla 
                var_dump(mysql_fetch_object($rs));
            }
            else
            {
                echo "no tiene nada para mostrar";
            }
            
        }
        else
        {
            echo "no me pude conectar<br>";
        }
        break;
    }
    case "agregar":
        $mysqlConection = mysql_connect("localhost","root","");
        if($mysqlConection!=false)
        {
            echo "me conecte<br>";
            move_uploaded_file($_FILES["foto"]["tmp_name"],$destino);
            //ejecuta una consulta en mySql (BASE DE DATOS, cual es la consulta)
            //devuelve un recurso , por eso se muestra un var_dam y si no puedo devuelve false
            mysql_db_query("cdcol","INSERT INTO cds (titel, interpret, jahr, foto) VALUES ('".$titulo."','".$interprete."' ,".$anio.",'".$foto."')");
            echo mysql_insert_id();
        }
        else
        {
            echo "no me pude conectar<br>";
        }

        break;
    case "modificar":
        $mysqlConection=mysql_connect("localhost","root","");
        if($mysqlConection!=false)
        {
            echo "me conecte<br>";
            move_uploaded_file($_FILES["foto"]["tmp_name"],$destino);
            //ejecuta una consulta en mySql (BASE DE DATOS, cual es la consulta)
            //devuelve un recurso , por eso se muestra un var_dam y si no puedo devuelve false
            mysql_db_query("cdcol","UPDATE cds SET titel='".$titulo."',interpret='".$interprete."' ,jahr=".$anio.",foto='".$foto."' WHERE id=$id");
        }
        else
        {
            echo "no me pude conectar<br>";
        }
    break;
    case "borrar":
        $mysqlConection=mysql_connect("localhost","root","");
        if($mysqlConection!=false)
        {
            echo "me conecte<br>";
            //ejecuta una consulta en mySql (BASE DE DATOS, cual es la consulta)
            
            mysql_db_query("cdcol","DELETE FROM cds WHERE id=$id");
            //muestra cuantas filas se borraron
            echo mysql_affected_rows();
        }
        else
        {
            echo "no me pude conectar<br>";
        }
        

        break;
    

}
?>