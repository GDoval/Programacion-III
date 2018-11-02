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
/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
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
/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
/// <reference path="producto.ts" />
/// <reference path="televisor.ts" />
var PrimerParcial;
(function (PrimerParcial) {
    $(document).ready(function () {
        //$('#btn-agregar').one("click", AgregarTelevisor);
    });
    //Funciona bien
    function AgregarTelevisor() {
        var codigo = $('#codigo').val();
        var marca = $('#marca').val();
        var precio = $('#precio').val();
        var tipo = $('#tipo').val();
        var pais = $('#pais').val();
        var foto = document.getElementById("foto");
        var tv = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name); //Envio unicamente el nombre del archivo (foto.jpg)
        var data = new FormData();
        data.append("cadenaJson", JSON.stringify(tv.toJSON())); //Crea un objeto onda stdClass y lo paso a su representacion de JSON como string
        data.append("caso", "agregar");
        data.append("foto", foto.files[0]); //Mando la foto misma
        //Mando todo por AJAX al backend y listo
        $.ajax({
            type: 'POST',
            url: "./BACKEND/administrar.php",
            cache: false,
            processData: false,
            contentType: false,
            data: data,
            success: function (data) {
                console.log(data);
            },
            async: true
        })
            .fail(function () {
            console.log("aaaaaaa");
        });
    }
    PrimerParcial.AgregarTelevisor = AgregarTelevisor;
    function MostrarTelevisores() {
        var data = new FormData();
        var escribir = '';
        var div = document.getElementById("divTabla");
        var divtest = document.createElement("div");
        data.append("caso", "traer");
        $.ajax({
            type: 'POST',
            url: "./BACKEND/administrar.php",
            cache: false,
            processData: false,
            contentType: false,
            data: data,
            success: function (data) {
                var array = JSON.parse(data);
                for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                    var objeto = array_1[_i];
                    objeto.pathFoto = './BACKEND/fotos/' + objeto.pathFoto;
                    escribir += '<table style="width:100%"> <tr>' +
                        '<th>Codigo</th> <th>Precio</th> <th>Marca</th> <th>Pais</th><th>Foto</th>' + '<th><input type="button" value="Eliminar" onclick="Eliminar()"</th>' +
                        '<th><input type="button" value="Modificar" onclick="Modificar()"</th>' +
                        '</tr><tr><td>' + objeto.codigo + '</td><td>' + objeto.precio + '</td><td>' + objeto.marca +
                        '</td><td>' + objeto.pais + '</td><td><img src=' + objeto.pathFoto + ' height=100 width=100></td>' +
                        '</tr></table>';
                }
                divtest.innerHTML = escribir;
                div.appendChild(divtest);
            },
            async: true
        })
            .fail(function () {
            console.log("aaaaaaa");
        });
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
        var codigo = $('#codigo').val();
        var marca = $('#marca').val();
        var precio = $('#precio').val();
        var tipo = $('#tipo').val();
        var pais = $('#pais').val();
        var foto = document.getElementById("foto");
        var tv = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name); //Envio unicamente el nombre del archivo (foto.jpg)
        var json;
        var flag = 0;
        var valor = localStorage.getItem("televisores_local_storage");
        json = JSON.parse(String(valor));
        for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
            var obj = json_1[_i];
            if (obj.codigo == tv.codigo) {
                console.log("Televisor ya existe");
                alert("Televisor ya existe");
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            AgregarTelevisor();
            GuardarEnLocalStorage();
        }
    }
    PrimerParcial.VerificarExistencia = VerificarExistencia;
})(PrimerParcial || (PrimerParcial = {}));
