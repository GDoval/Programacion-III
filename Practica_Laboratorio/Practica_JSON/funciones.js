var Producto = /** @class */ (function () {
    function Producto(nombre, codigo, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;
    }
    return Producto;
}());
/// <reference path="producto.ts" />
function enviarJSON() {
    var producto = new Producto("Tushonka", "001", 1234);
    var json = JSON.stringify(["nombre:" + producto.nombre, "codigo:" + String(producto.codigo), "precio:" + producto.precio]);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "./Practica_JSON/recibirJSON.php", true);
    xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhttp.send("json=" + json);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log(xhttp.responseText);
            var obj = JSON.parse(xhttp.responseText);
            console.log(obj.nombre);
        }
    };
}
