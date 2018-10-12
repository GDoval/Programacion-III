/// <reference path="producto.ts" />
/// <reference path="televisor.ts" />

namespace PrimerParcial
{
    export function  AgregarTelevisor()
    {
        let codigo:number = parseInt((<HTMLInputElement>document.getElementById("codigo")).value);
        let precio:number = parseInt((<HTMLInputElement>document.getElementById("precio")).value);
        let marca:string = (<HTMLInputElement>document.getElementById("marca")).value;
        let tipo:string = (<HTMLInputElement>document.getElementById("tipo")).value;
        let pais:string = (<HTMLSelectElement>document.getElementById("pais")).value;
        let foto:any = document.getElementById("foto");
        let televisor = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name);
        

        //Parte de AJAX
        let xhttp : XMLHttpRequest =  new XMLHttpRequest();
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("enctype", "multipart/form-data");

        let data = new FormData();
        let cadejaJSON = JSON.stringify(televisor.toJSON());
        data.append("cadenaJson", cadejaJSON);
        data.append("caso", "agregar");
        data.append("foto", foto.files[0]);
        xhttp.send(data);

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText);
                }
            }
    }

    export function MostrarTelevisores()
    {
        let xhttp : XMLHttpRequest =  new XMLHttpRequest();
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("enctype", "multipart/form-data");
        let data = new FormData();
        data.append("caso", "traer");
        xhttp.send(data);
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200)
            {
                let json = JSON.parse(xhttp.responseText);
                let div =(<HTMLDivElement> document.getElementById("divTabla"));
                let divtest = document.createElement("div");
                let escribir:string = '';
                for(let objeto of json)
                {
                    objeto.pathFoto = './BACKEND/fotos/' + objeto.pathFoto;
                    escribir += '<td>' + objeto.marca + '</td><br/> <td>' + objeto.codigo + '</td> <br/> <td> '
                    + objeto.precio + '</td> <br/>' + '<td>' + objeto.pais + '</td><br/>';
                    escribir += '<img src="' + objeto.pathFoto + '" height="90px" width="90px" ><br/>';
                }
                divtest.innerHTML = escribir;
                div.appendChild(divtest);
            }
        }
    }

    export function GuardarEnLocalStorage()
    {
        let xhttp : XMLHttpRequest =  new XMLHttpRequest();
        xhttp.open("POST", "./BACKEND/administrar.php", true);
        xhttp.setRequestHeader("enctype", "multipart/form-data");
        let data = new FormData();
        data.append("caso", "traer");
        xhttp.send(data);
        xhttp.onreadystatechange = () =>
        {
            if (xhttp.readyState == 4 && xhttp.status == 200)
            {
                let json = JSON.parse(xhttp.responseText);
                localStorage.setItem("televisores_local_storage", JSON.stringify(json));
            }
        }
    }

    export function VerificarExistencia()
    {
        let codigo:number = parseInt((<HTMLInputElement>document.getElementById("codigo")).value);
        let precio:number = parseInt((<HTMLInputElement>document.getElementById("precio")).value);
        let marca:string = (<HTMLInputElement>document.getElementById("marca")).value;
        let tipo:string = (<HTMLInputElement>document.getElementById("tipo")).value;
        let pais:string = (<HTMLSelectElement>document.getElementById("pais")).value;
        let foto:any = document.getElementById("foto");

        let televisor = new Entidades.Televisor(codigo, marca, precio, tipo, pais, foto.files[0].name);
        
        let json:any;
        let valor = localStorage.getItem("televisores_local_storage");
        json = JSON.parse(String(valor));
        for(let obj of json)
        {
            if(obj.codigo == televisor.codigo)
            {
                console.log("Televisor ya existe");
                alert("Televisor ya existe");
                break;
            }else
            {
                AgregarTelevisor();
                GuardarEnLocalStorage();
            }
        }
    }
}