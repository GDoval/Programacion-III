var Producto = /** @class */ (function () {
    function Producto(nombre, codigo, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;
    }
    return Producto;
}());
/// <reference path="producto.ts" />
function enviarJSON(producto) {
    //Pasamos de un objeto en Java a un string en formato JSON
    var json = JSON.stringify(producto);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./Practica_JSON/guardoJSON.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("json=" + json);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log(xhttp.responseText);
            //Recibo el JSON en formato string y lo paso a un objeto Java. Se puede acceder a los campos usando el punto: obj.nombre, obj.precio etc
            var obj = xhttp.responseText;
            console.log(JSON.stringify(obj));
        }
    };
}
/// <reference path="producto.ts" />
function recibirJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./Practica_JSON/traerJSON.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log(xhttp.responseText);
            var obj = JSON.parse(xhttp.responseText);
            console.log(obj);
        }
    };
    /* Este script hace lo siguiente:
    1) Generarmos lo necesario para una conexion AJAX. Notar que por mas que este script no envie nada hacia el PHP aún así tenemos que usar .send() para establecer
    la conexion
    2) Recibimos la respuesta del script traerJSON.php y lo parseamos a un _objeto_ de tipo JavaScript -> let obj:any = JSON.parse(xhttp.responseText);
    3) Lo que vamos a tener, entonces, es un array de objetos genericos, donde podemos acceder a sus atributos indicando indice y el nombre del atributo
    Ejemplo:
    
    obj[0].nombre -> nos devuelve el atributo nombre del primer objeto dentro del array. Y asi con todo
    */
}
/// <reference path="producto.ts" />
/// <reference path="enviarJSON.ts" />
/// <reference path="recibirJSON.ts" />
function generoProducto() {
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    var codigo = document.getElementById("precio").value;
    if (nombre != '' && codigo != '' && precio != '') {
        var producto = new Producto(nombre, codigo, parseInt(precio));
        return producto;
    }
    else {
        return null;
    }
}
function mandoProducto() {
    var producto = generoProducto();
    if (producto != null) {
        enviarJSON(producto);
    }
}
function reciboProductos() {
    recibirJSON();
}
