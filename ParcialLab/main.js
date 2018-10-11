var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parcial;
(function (Parcial) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, edad) {
            this.apellido = apellido;
            this.edad = edad;
            this.nombre = nombre;
        }
        Persona.prototype.toString = function () {
            return '"nombre" : "' + this.nombre + '", "apellido": "' + this.apellido + '", "edad" : "' + String(this.edad) + '"';
        };
        return Persona;
    }());
    Parcial.Persona = Persona;
})(Parcial || (Parcial = {}));
/// <reference path="persona.ts" />
var Parcial;
(function (Parcial) {
    var Ciudadano = /** @class */ (function (_super) {
        __extends(Ciudadano, _super);
        function Ciudadano(nombre, apellido, edad, dni, pais, foto) {
            var _this = _super.call(this, nombre, apellido, edad) || this;
            _this.dni = dni;
            _this.pais = pais;
            if (foto != undefined)
                _this.foto = foto;
            else
                _this.foto = 'noexiste';
            return _this;
        }
        Ciudadano.prototype.ciudadanoToJSON = function () {
            var json = '{' + this.toString() + ', "dni" : "' + this.dni + '", "pais" : "' + this.pais + '", "foto" : "' + this.foto + '"}';
            return JSON.parse(json);
        };
        return Ciudadano;
    }(Parcial.Persona));
    Parcial.Ciudadano = Ciudadano;
})(Parcial || (Parcial = {}));
/// <reference path="persona.ts" />
/// <reference path="ciudadano.ts" />
var Parcial;
(function (Parcial) {
    var Manejadora = /** @class */ (function () {
        function Manejadora() {
        }
        Manejadora.agregarCiudadano = function () {
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var pais = document.getElementById("pais").value;
            var foto = document.getElementById("foto").value;
            var tipito = new Parcial.Ciudadano(nombre, apellido, 30, 33712616, pais, foto);
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "./guardarArchivo.php", true);
            //xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhttp.setRequestHeader("enctype", "multipart/form-data");
            xhttp.send("tipo=" + tipito.ciudadanoToJSON());
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log(xhttp.responseText);
                }
            };
        };
        return Manejadora;
    }());
    Parcial.Manejadora = Manejadora;
})(Parcial || (Parcial = {}));
/// <reference path="persona.ts" />
/// <reference path="ciudadano.ts" />
/// <reference path="manejadora.ts" />
function Boton() {
    Parcial.Manejadora.agregarCiudadano();
}
