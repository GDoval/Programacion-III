var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Entidades;
(function (Entidades) {
    var Producto = /** @class */ (function () {
        function Producto(codigo, marca, precio) {
            this.codigo = codigo;
            this.marca = marca;
            this.precio = precio;
        }
        Producto.prototype.toString = function () {
            return JSON.stringify({ codigo: this.codigo, marca: this.marca, precio: this.precio });
        };
        return Producto;
    }());
    Entidades.Producto = Producto;
})(Entidades || (Entidades = {}));
/// <reference path="producto.ts" />
var Entidades;
(function (Entidades) {
    var Televisor = /** @class */ (function (_super) {
        __extends(Televisor, _super);
        function Televisor(codigo, marca, precio, tipo, pais, path) {
            var _this = _super.call(this, codigo, marca, precio) || this;
            _this.tipo = tipo;
            _this.paisOrigen = pais;
            _this.pathFoto = path;
            return _this;
        }
        Televisor.prototype.toJSON = function () {
            var retorno = JSON.parse(_super.prototype.toString.call(this));
            retorno.pais = this.paisOrigen;
            retorno.pathFoto = this.pathFoto;
            return retorno;
        };
        return Televisor;
    }(Entidades.Producto));
    Entidades.Televisor = Televisor;
})(Entidades || (Entidades = {}));
/// <reference path="producto.ts" />
/// <reference path="televisor.ts" />
var PrimerParcial;
(function (PrimerParcial) {
    function AgregarTelevisor() {
        var codigo = parseInt(document.getElementById("codigo").value);
        var precio = parseInt(document.getElementById("precio").value);
        var marca = document.getElementById("marca").value;
        var tipo = document.getElementById("tipo").value;
        var pais = document.getElementById("pais").value;
        var foto = document.getElementById("foto");
        var televisor = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name);
        //Parte de AJAX
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("enctype", "multipart/form-data");
        var data = new FormData();
        var cadejaJSON = JSON.stringify(televisor.toJSON());
        data.append("cadenaJson", cadejaJSON);
        data.append("caso", "agregar");
        data.append("foto", foto.files[0]);
        xhttp.send(data);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText);
            }
        };
    }
    PrimerParcial.AgregarTelevisor = AgregarTelevisor;
    function MostrarTelevisores() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("enctype", "multipart/form-data");
        var data = new FormData();
        data.append("caso", "traer");
        xhttp.send(data);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var json = JSON.parse(xhttp.responseText);
                var div = document.getElementById("divTabla");
                var divtest = document.createElement("div");
                var escribir = '';
                for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                    var objeto = json_1[_i];
                    objeto.pathFoto = './BACKEND/fotos/' + objeto.pathFoto;
                    escribir += '<td>' + objeto.marca + '</td><br/> <td>' + objeto.codigo + '</td> <br/> <td> '
                        + objeto.precio + '</td> <br/>' + '<td>' + objeto.pais + '</td><br/>';
                    escribir += '<img src="' + objeto.pathFoto + '" height="90px" width="90px" ><br/>';
                }
                divtest.innerHTML = escribir;
                div.appendChild(divtest);
            }
        };
    }
    PrimerParcial.MostrarTelevisores = MostrarTelevisores;
    function GuardarEnLocalStorage() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("enctype", "multipart/form-data");
        var data = new FormData();
        data.append("caso", "traer");
        xhttp.send(data);
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var json = JSON.parse(xhttp.responseText);
                localStorage.setItem("televisores_local_storage", JSON.stringify(json));
            }
        };
    }
    PrimerParcial.GuardarEnLocalStorage = GuardarEnLocalStorage;
    function VerificarExistencia() {
        var codigo = parseInt(document.getElementById("codigo").value);
        var precio = parseInt(document.getElementById("precio").value);
        var marca = document.getElementById("marca").value;
        var tipo = document.getElementById("tipo").value;
        var pais = document.getElementById("pais").value;
        var foto = document.getElementById("foto");
        var televisor = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name);
        var json;
        var valor = localStorage.getItem("televisores_local_storage");
        json = JSON.parse(String(valor));
        for (var _i = 0, json_2 = json; _i < json_2.length; _i++) {
            var obj = json_2[_i];
            if (obj.codigo == televisor.codigo) {
                console.log("Televisor ya existe");
                alert("Televisor ya existe");
                break;
            }
            else {
                AgregarTelevisor();
                GuardarEnLocalStorage();
            }
        }
    }
    PrimerParcial.VerificarExistencia = VerificarExistencia;
})(PrimerParcial || (PrimerParcial = {}));
