function MostrarDatos():void {

    let nombre : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;
    let mail : string = (<HTMLInputElement> document.getElementById("txtMail")).value;
    let dni : string = (<HTMLInputElement> document.getElementById("txtDni")).value;
    let cv : string = (<HTMLInputElement> document.getElementById("txtNombre")).value;

    alert("Nombre: " + nombre + "Mail: " + mail + "DNI: " + dni + "Curriculum Vitae: " + cv);
}
