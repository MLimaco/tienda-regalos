"use strict";
//Definicion de funcion
function preguntar_escribir(pregunta) {
    let respuesta = prompt(pregunta);
    if (respuesta == "" || respuesta == null) return preguntar_escribir(pregunta);
    if (pregunta == "Ingresa tu correo" && !respuesta.includes("@")) return preguntar_escribir(pregunta);
    if (pregunta == "Ingresa tu edad" && respuesta < 18) return preguntar_escribir(pregunta);
    return respuesta;
}

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
    //recursividad
    return respuesta;
}
//Llamado
let nombreCliente = preguntar_escribir("Ingresa tu nombre");
let correoCliente = preguntar_escribir("Ingresa tu correo");
let edadCliente = parseInt(preguntar_escribir("Ingresa tu edad"));
alert("Respuestas Validas");

//if (nombreCliente == null) {
//    alert("Tu registro está incompleto")
//}

function calificacion() {
    let cantidad = prompt("¿Qué calificación de 🎁 le darías del 1-5?");
    if (cantidad == "" || cantidad == null || cantidad > 5 || cantidad < 1 || isNaN(cantidad)) {
        alert("Debes ingresar un número del 1 al 5")
        return calificacion();
    } else {
        cantidad = parseInt(cantidad);

        // crea elemento img
        for (let index = 1; index <= cantidad; index++) {
            //document.write("<img src='img/logo.png'>");
            let elemento = document.createElement('img');
            elemento.className = 'ranking';
            elemento.src = 'img/gift.png';
            elemento.alt = "libro";
            document.body.appendChild(elemento);
        }

        // crea un elemento P para el texto del rankeo
        let contador = document.createElement('p');
        contador.className = 'contador';
        contador.textContent = "Has calificado con " + cantidad + " 🎁";
        document.body.appendChild(contador);

    }
}
