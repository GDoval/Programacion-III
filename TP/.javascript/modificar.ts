function AdministrarModificar(dni:number):void{
    let form = <HTMLFormElement>document.getElementById("Modificar");

    let input = <HTMLInputElement>document.getElementById("modificar");
    input.value = dni.toString();
    
    form.submit();
}