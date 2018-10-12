/// <reference path="producto.ts" />

function recibirJSON()
{
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./Practica_JSON/traerJSON.php", true);
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xhttp.send();

    xhttp.onreadystatechange = function () 
    {
        if (xhttp.readyState == 4 && xhttp.status == 200)
        {
            //console.log(xhttp.responseText);
            let obj:any = JSON.parse(xhttp.responseText);
            console.log(obj);
        }

    }
/* Este script hace lo siguiente:
1) Generarmos lo necesario para una conexion AJAX. Notar que por mas que este script no envie nada hacia el PHP aún así tenemos que usar .send() para establecer
la conexion
2) Recibimos la respuesta del script traerJSON.php y lo parseamos a un _objeto_ de tipo JavaScript -> let obj:any = JSON.parse(xhttp.responseText);
3) Lo que vamos a tener, entonces, es un array de objetos genericos, donde podemos acceder a sus atributos indicando indice y el nombre del atributo
Ejemplo:

obj[0].nombre -> nos devuelve el atributo nombre del primer objeto dentro del array. Y asi con todo
*/


}