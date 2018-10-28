<?php   

require_once 'persona.php';




//Recibe por POST 3 variables distintas, y lo devuelve como JSON
/*$persona = new Persona($_POST['nombre'], $_POST['apellido'], $_POST['pais']);
echo $persona->toJson();*/

/***************************************************************************************************************** */

//Recibe por POST un string en formato JSON, lo parseo a un StdClass y lo retorno

/*
$buffer = new stdClass();
$buffer = json_decode($_POST['data']); //Se pasa el string a stdClass
$persona = new Persona($buffer->nombre, $buffer->apellido, $buffer->pais); //Creo una instancia de Persona
echo $persona->toJson(); //Lo parseo a Json y retorno eso hacia el frontEnd
*/

/**************************************************************************************************************** */

//Recibo un String por POST, lo paso a stdClass y lo guardo dentro de un array de JSON.

$buffer = new stdClass();
$buffer = json_decode($_POST['data']);
$persona = new Persona($buffer->nombre, $buffer->apellido, $buffer->pais);
$persona2 = new Persona("Juanelo", "Petelo", "Escandinavia");

//Distintas formas de cargar un array
/* Array Indexado (posicion 0, 1...n)
$arrayPersonas = array();                    Testeado OK
$arrayPersonas[] = $persona;
$arrayPersonas[] = $persona2;
*/ 

//Array asociativo (clave  => valor)
$arrayPersonas = array("uno" => $persona, "dos" => $persona2); //Testeado OK


//Retornar ese array hacia el frontend

$retorno = json_encode($arrayPersonas);             //Testeado OK
echo $retorno;


/******************************************************************************************************************** */

?>