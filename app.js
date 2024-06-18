"use strict";
//Definicion de funcion
function preguntarEscribir(pregunta) {
    let respuesta = prompt(pregunta);
    if (pregunta == "Ingresa tu correo") {
        if (respuesta.includes("@")) {
            alert("Correo Valido");
        }
        else {
            preguntarEscribir(pregunta);
        }
    }
    if (pregunta == "Ingresa tu edad") {
        if (respuesta >= 18) {
            alert("Adelante");
        }
        else {
            preguntarEscribir(pregunta);
        }
    }
    return respuesta;
}
//Llamado
let nombreCliente = preguntarEscribir("Ingresa tu nombre");
let correoCliente = preguntarEscribir("Ingresa tu correo");
let edadCliente = parseInt(preguntarEscribir("Ingresa tu edad"));

if (nombreCliente == "") {
    alert("Tu registro está incompleto")
}
