"use strict";
var Test;
(function (Test) {
    //CREO UNA INSTANCIA DE XMLHTTPREQUEST
    var xhttp = new XMLHttpRequest();
    function Ajax() {
        //METODO; URL; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php", true);
        //ENVIO DE LA PETICION
        xhttp.send();
        //FUNCION CALLBACK
        xhttp.onreadystatechange = function () {
            alert(xhttp.readyState);
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            }
        };
    }
    Test.Ajax = Ajax;
    //ENVIO PETICION CON PARAMETROS POR METODO GET
    function AjaxGET() {
        //METODO; URL + PARAMETROS; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php?valor=" + Math.random() * 100, true);
        //ENVIO DE LA PETICION
        xhttp.send();
        //FUNCION CALLBACK
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            }
        };
    }
    Test.AjaxGET = AjaxGET;
    //ENVIO PETICION CON PARAMETROS POR METODO POST
    function AjaxPOST() {
        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", "BACKEND/ajax_test.php", true);
        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        //ENVIO DE LA PETICION CON LOS PARAMETROS
        xhttp.send("valor=" + Math.random() * 100);
        //FUNCION CALLBACK
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert(xhttp.responseText);
            }
        };
    }
    Test.AjaxPOST = AjaxPOST;
    function ActualizarGET() {
        //METODO; URL + PARAMETROS; ASINCRONICO?
        xhttp.open("GET", "BACKEND/ajax_test.php?valor=" + Math.random() * 100, true);
        //ENVIO DE LA PETICION
        xhttp.send();
        //FUNCION CALLBACK
        xhttp.onreadystatechange = function () {
            AdministrarRespuesta();
        };
    }
    Test.ActualizarGET = ActualizarGET;
    function ActualizarPOST() {
        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", "BACKEND/ajax_test.php", true);
        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        //ENVIO DE LA PETICION CON LOS PARAMETROS
        xhttp.send("valor=" + Math.random() * 100);
        //FUNCION CALLBACK
        xhttp.onreadystatechange = function () {
            AdministrarRespuesta();
        };
    }
    Test.ActualizarPOST = ActualizarPOST;
    function AdministrarRespuesta() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //LA RESPUESTA SE GUARDA EN UN ELEMENTO HTML
            document.getElementById("divResultado").innerHTML = xhttp.responseText;
        }
    }
    /*******************************************************************************************************/
    /*******************************************************************************************************/
    function ProcesoLargo() {
        var pagina = "BACKEND/proceso_largo.php";
        var div = document.getElementById("divResultado");
        //LIMPIO EL CONTENIDO DEL DIV    
        div.innerHTML = '';
        //MUESTRO EL GIF EN EL CENTRO DE LA PAGINA
        AdministrarGif(true, 2);
        //METODO; URL; ASINCRONICO?
        xhttp.open("POST", pagina, true);
        //SETEO EL ENCABEZADO DE LA PETICION	
        xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        //ENVIO DE LA PETICION
        xhttp.send(null);
        //FUNCION CALLBACK
        xhttp.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhttp.readyState === DONE) {
                if (xhttp.status === OK) {
                    //MUESTRO EL RESULTADO DE LA PETICION
                    div.innerHTML = xhttp.responseText;
                    //OCULTO EL GIF
                    AdministrarGif(false);
                }
                else {
                    alert("Error\n" + xhttp.status);
                    //OCULTO EL GIF
                    AdministrarGif(false);
                }
            }
        };
    }
    Test.ProcesoLargo = ProcesoLargo;
    function AdministrarGif(mostrar, cual) {
        if (cual === void 0) { cual = 1; }
        var gif = cual === 1 ? "AJAX/gif-load.gif" : "AJAX/200.webp";
        var div = document.getElementById("divGif");
        var img = document.getElementById("imgGif");
        if (mostrar) {
            div.style.display = "block";
            div.style.top = "50%";
            div.style.left = "45%";
            img.src = gif;
        }
        if (!mostrar) {
            div.style.display = "none";
            img.src = "";
        }
    }
    function IrHacia(pagina) {
        window.location.href = pagina;
    }
    Test.IrHacia = IrHacia;
})(Test || (Test = {}));
//# sourceMappingURL=manejadora.js.map