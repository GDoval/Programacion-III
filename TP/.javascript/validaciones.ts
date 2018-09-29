/// <reference path="envio_a_administracion.ts" />


function ValidarCamposVacios(): boolean {
    let array_ids: string[] = ["Apellido", "Nombre", "dni", "sexo", "legajo", "sueldo"]
    let error_log: string = "";
    let flag: number = 0;
    for (let id of array_ids) {
        let validar: string = (<HTMLInputElement>document.getElementById(id)).value;
        if (validar == "") {
            error_log += id + ",";
            flag = 1;
        }
    }
    if (flag) {
        alert("Los siguientes campos se encuentran vacios: " + error_log);
        return false;
    } else {
        return true;
    }
}

function ValidarRangoNumerico(validar: number, max: number, min: Number): boolean {
    if (validar >= min && validar <= max) {
        return true;
    } else {
        return false;
    }
}




function ValidarCombo(valor: string, correcto: string): boolean //Valida el Sexo
{
    if (valor === correcto) {
        return true;
    } else {
        return false;
    }
}

function ObtenerTurnoSeleccionado(): string {
    let array_ids: string[] = ["mañana", "tarde", "noche"];
    let flag: number = 0;
    let valor: string = "";
    for (let id of array_ids) {
        let validar: boolean = (<HTMLInputElement>document.getElementById(id)).checked;
        if (validar) {
            flag += 1;
            valor = (<HTMLInputElement>document.getElementById(id)).value;
        }
    }
    if (flag == 1) {
        return valor;
    } else {
        return ""
    }

}

function ObtenerSueldoMaximo(turno: string): number {
    switch (turno) {
        case "Mañana":
            return 20000;
            break;
        case "Tarde":
            return 18500;
            break;
        case "Noche":
            return 25000;
            break;
        default:
            return -1;
            break;
    }
}

function ValidarSueldoPorTurno(turno: string, sueldo: number): boolean {
    let resp: boolean = true;
    switch (turno) {
        case "Mañana":
            if (sueldo > 20000 || sueldo < 8000)
                resp = false;
            break;
        case "Tarde":
            if (sueldo > 18500 || sueldo < 8000)
                resp = false;
            break;
        case "Noche":
            if (sueldo > 25000 || sueldo < 8000)
                resp = false;
            break;
        default:
            resp = false;
            break;
    }
    return resp;
}

function AdministrarValidaciones(): boolean {
    //#region Declaracion de variables
    let validarTodo: boolean = false;
    let contValidaciones: number = 0;
    let array_ids: string[] = ["dni", "legajo", "sueldo"];
    let array_min: number[] = [1000000, 100, 8000];
    let array_max: number[] = [55000000, 550, 25000];
    let error_log: string = "";
    let indice: number = 0;
    let valor: string = "";
    let numero: number = 0
    let validar: boolean = false;
    let flag: number = 0;


    //#endregion


    //#region Valida el rango de los campos numericos 
    for (let id of array_ids) {
        valor = (<HTMLInputElement>document.getElementById(id)).value;
        numero = parseInt(valor);
        validarTodo = ValidarRangoNumerico(numero, array_max[indice], array_min[indice]);
        indice++;
        if (!validarTodo) {
            error_log += id + ",";
            flag = 1;
        }
    }
    if (flag == 1) {
        alert("Los siguientes rangos fallaron: " + error_log);
    } else {
        contValidaciones++;
    }
    //#endregion

    //Valida Sexo
    let sexo: string = (<HTMLSelectElement>document.getElementById("sexo")).value;

    //#region Valida que el turno este bien

    let turno: string = ObtenerTurnoSeleccionado();
    if (turno != "") {
        contValidaciones++;
    }
    //#endregion

    validarTodo = ValidarCamposVacios();
    if (validarTodo == true) {
        contValidaciones++;
    }
    //Validar rango Sueldo

    let sueldo: number = parseInt((<HTMLSelectElement>document.getElementById("sueldo")).value);
    validarTodo = ValidarSueldoPorTurno(turno, sueldo);turno
    if (validarTodo == true) {
        contValidaciones++;
    }
    if (contValidaciones == 4) {
        return true;
    } else {
        return false;
    }
}

function todoOK() {
    let valido: boolean = false;
    valido = AdministrarValidaciones();

    let nombre: string = (<HTMLInputElement>document.getElementById("Nombre")).value;
    let apellido: string = (<HTMLInputElement>document.getElementById("Apellido")).value;
    let dni: number = parseInt((<HTMLInputElement>document.getElementById("dni")).value);
    let sexo: string = (<HTMLInputElement>document.getElementById("sexo")).value;
    let legajo: string = (<HTMLInputElement>document.getElementById("legajo")).value;
    let sueldo: number = parseInt((<HTMLInputElement>document.getElementById("sueldo")).value);
    let turno: string = ObtenerTurnoSeleccionado();

    if (valido == true) {
        sendData(nombre, apellido, dni, sexo, legajo, sueldo, turno);
    }
}