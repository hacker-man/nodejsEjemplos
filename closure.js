"use strict";
function creaAgente(nombre) {
    var edad = 10;
    return {
        ponNombre: function (nuevoNombre) {
            nombre = nuevoNombre;
        },
        leeNombre: function () {
            console.log(nombre);
            return nombre;
        },
        ponEdad: function (nuevaEdad) {
            console.log(nuevaEdad);
            edad = nuevaEdad;
        },
        leeEdad: function () {
            console.log(edad);
            return edad;
        }
    }
}

var agente = new creaAgente("juanito");
setTimeout(agente.ponEdad(7),1000);
agente.ponEdad(9);
agente.leeNombre();
var agente = new creaAgente("pepito");
agente.leeEdad();
agente.leeNombre();