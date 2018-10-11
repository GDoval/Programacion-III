/// <reference path="persona.ts" />
/// <reference path="ciudadano.ts" />

namespace Parcial {
    export class Manejadora {
        public static agregarCiudadano() {
            let nombre: string = (<HTMLInputElement>document.getElementById("nombre")).value;
            let apellido: string = (<HTMLInputElement>document.getElementById("apellido")).value;
            let pais: string = (<HTMLInputElement>document.getElementById("pais")).value;
            let foto: string = (<HTMLInputElement>document.getElementById("foto")).value;

            let tipito = new Parcial.Ciudadano(nombre, apellido, 30, 33712616, pais, foto);

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "./guardarArchivo.php", true);
            //xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhttp.setRequestHeader("enctype", "multipart/form-data");
            xhttp.send("tipo=" + tipito.ciudadanoToJSON());
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log(xhttp.responseText);
                }
            }
        }
    }
}


