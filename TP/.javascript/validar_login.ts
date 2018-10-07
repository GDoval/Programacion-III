/// <reference path="validaciones.ts" />


function ValidarVacios(): string[]
 {
    let array_ids: string[] = ["apellido", "dni"];
    let array_errores: string[] = [];
    for (let id of array_ids) {
        let validar: string = String((<HTMLInputElement>document.getElementById(id)).value);
        if (validar == "") {
            array_errores.push(id);
        }
    }
    return array_errores;
}

function VerificarValidacionesLogin(): boolean 
{
    let array_vacios = ValidarVacios();
    let validar_vacios:boolean = false;
    let flag = 0;
    let validar_rango:boolean = ValidarRangoNumerico(parseInt((<HTMLInputElement>document.getElementById("dni")).value), 55000000, 1000000);
    if (array_vacios.length == 0)
    {
        validar_vacios = true;
    }else
    {
        for(let id of array_vacios)
        {
            AdministrarSpanError(id, false);
            flag++;
        }
    }
    if(validar_vacios && validar_rango && flag == 0)
    {
        return true;
    }else
    {
        return false;
    }
}

function AdministrarSpanError(id: string, validar: boolean): void {
    let elemento: any = document.getElementById(id);
    if (!validar) {
        if (elemento != null) {
            elemento.style.borderColor = "red";
        }
    } else {
        if (elemento != null) {
            elemento.style.borderColor = "white";
        }
    }
}