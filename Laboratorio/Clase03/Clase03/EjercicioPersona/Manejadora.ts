/// <reference path="./Alumno.ts" />
namespace Gente
{

    export class Manejadora
    {
        public static AceptarClick() : void
        {
            let nombre:string = (<HTMLInputElement>document.getElementById("txtNombre")).value;
            let apellido:string = (<HTMLInputElement>document.getElementById("txtApellido")).value;
            let legajo:string = (<HTMLInputElement>document.getElementById("txtLegajo")).value;
            let Alum :Alumno = new Alumno(nombre,apellido,parseInt(legajo));
            alert(Alum.ToString());
            // voy mostrando uno abajo de otro los elementos que ingreso
            (<HTMLDivElement>document.getElementById("DivId")).innerHTML +=Alum.ToString() + "<br>";
            //guarda solo valores de string , la clave va a ser alumnos//
            let aux=localStorage.getItem("alumnos");
            localStorage.setItem("alumnos",Alum.ToString()+";"); 
            
        
        }
    }
}