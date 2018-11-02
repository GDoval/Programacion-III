/// <reference path="node_modules/@types/jquery/index.d.ts" /> 
/// <reference path="producto.ts" />
/// <reference path="televisor.ts" />

namespace PrimerParcial {
    $(document).ready(function () {
        //$('#btn-agregar').one("click", AgregarTelevisor);
    });
    //Funciona bien
    export function AgregarTelevisor(modificar?:boolean) {
        let codigo: any = $('#codigo').val();
        let marca: any = $('#marca').val();
        let precio: any = $('#precio').val();
        let tipo: any = $('#tipo').val();
        let pais: any = $('#pais').val();

        let foto: any = document.getElementById("foto");

        let tv = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name); //Envio unicamente el nombre del archivo (foto.jpg)
        let data = new FormData();
        data.append("cadenaJson", JSON.stringify(tv.toJSON())); //Crea un objeto onda stdClass y lo paso a su representacion de JSON como string
        data.append("caso", "agregar");
        data.append("foto", foto.files[0]);//Mando la foto misma


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

    export function MostrarTelevisores() {
        let data = new FormData();
        let escribir: any = '';
        let div = (<HTMLDivElement>document.getElementById("divTabla"));
        let divtest = document.createElement("div");




        data.append("caso", "traer");
        $.ajax({
            type: 'POST',
            url: "./BACKEND/administrar.php",
            cache: false,
            processData: false,
            contentType: false,
            data: data,
            success: function (data) {
                let array = JSON.parse(data);
                for (let objeto of array) {
                    objeto.pathFoto = './BACKEND/fotos/' + objeto.pathFoto;

                    escribir += '<table style="width:100%"> <tr>' +
                        '<th>Codigo</th> <th>Precio</th> <th>Marca</th> <th>Pais</th><th>Foto</th>' + '<th><input type="button" value="Eliminar" onclick="Eliminar(' + objeto.codigo + ')"</th>' +
                        '<th><input type="button" value="Modificar" onclick="Modificar(' + objeto.codigo + ')"</th>' +
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

    export function GuardarEnLocalStorage() {
        let xhttp: XMLHttpRequest = new XMLHttpRequest();
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("enctype", "multipart/form-data");


        let data = new FormData();
        data.append("caso", "traer");
        xhttp.send(data);


        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let json = JSON.parse(xhttp.responseText);
                localStorage.setItem("televisores_local_storage", JSON.stringify(json));
            }
        }
    }


    export function VerificarExistencia() {
        let codigo: any = $('#codigo').val();
        let marca: any = $('#marca').val();
        let precio: any = $('#precio').val();
        let tipo: any = $('#tipo').val();
        let pais: any = $('#pais').val();

        let foto: any = document.getElementById("foto");

        let tv = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name); //Envio unicamente el nombre del archivo (foto.jpg)

        let json: any;
        let flag = 0;
        let valor = localStorage.getItem("televisores_local_storage");
        json = JSON.parse(String(valor));
        for (let obj of json) {
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


    export function EliminarTelevisor(codigo: string) {

        let xhttp: XMLHttpRequest = new XMLHttpRequest();
        let formData: FormData = new FormData();
        var c: string = "";
        var t: string = "";
        let tv: Entidades.Televisor;
        formData.append("caso", "traer");

        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("ENCTYPE", "multipart/form-data");
        xhttp.send(formData);

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText != "error") {

                    let obj: any = JSON.parse(xhttp.responseText);

                    obj.forEach(function (o: any) {
                        if (o.codigo == codigo) {
                            tv = new Entidades.Televisor(o.codigo,
                                o.marca, o.precio, o.tipo, o.paisOrigen, o.codigo + ".jpg");
                            c = o.codigo;
                            t = o.tipo;
                            let form: FormData = new FormData();
                            if (confirm('¿Estas seguro que desea eliminar el televisor ?' + c + '-' + t)) {
                                form.append('caso', 'eliminar');
                                form.append('cadenaJson', JSON.stringify(tv.toJSON()));


                                xhttp.open("POST", "./BACKEND/administrar.php", true);
                                xhttp.setRequestHeader("ENCTYPE", "multipart/form-data");
                                xhttp.send(form);
                                xhttp.onreadystatechange = () => {
                                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                                        let arrayJson: any = JSON.parse(xhttp.responseText);
                                        if (arrayJson.TodoOK) {
                                            alert("Televisor: " + codigo + ", Fue eliminado correctamente");
                                            PrimerParcial.MostrarTelevisores();
                                        } else {
                                            alert("Error");
                                        }


                                    }

                                }
                            }
                            else {
                                return false;
                            }

                        }
                    });
                } else {

                }

            }
        }
    }

    export function ModificarTelevisor(cod: string){
        var codigo: any = <HTMLInputElement>document.getElementById("codigo");
        var marca: any = <HTMLInputElement>document.getElementById("marca");
        var precio: any = <HTMLInputElement>document.getElementById("precio");
        var tipo: any = <HTMLInputElement>document.getElementById("tipo");
        var pais: any = <HTMLSelectElement>document.getElementById("pais");
        var foto: any = <HTMLInputElement>document.getElementById("foto");
        var boton: any = <HTMLInputElement>document.getElementById("btn-agregar");

        boton.value = "Modificar";
        boton.onclick = 'PrimerParcial.AgregarTelevisor(true)';
        codigo.readOnly = true;


        let xhttp: XMLHttpRequest = new XMLHttpRequest();
        let formData: FormData = new FormData();
        var c: string = "";
        var t: string = "";
        let tv: Entidades.Televisor;
        formData.append("caso", "traer");

        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("ENCTYPE", "multipart/form-data");
        xhttp.send(formData);

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                if (xhttp.responseText != "error") {
                    let obj: any = JSON.parse(xhttp.responseText);
                    console.log(obj);
                    obj.forEach(function (o: any) {
                        if (o.codigo == cod) {
                            codigo.value = o.codigo;
                            marca.value = o.marca;
                            precio.value = o.precio;
                            tipo.value = o.tipo;
                            pais.value = o.paisOrigen;
                            let img = <HTMLImageElement>document.getElementById("imgFoto");
                            img.setAttribute("src", "BACKEND/fotos/" + codigo.value + ".jpg");

                        }
                    });
                }
            }
        }

    }
}


