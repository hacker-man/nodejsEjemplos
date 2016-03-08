"use strict";

//hacer función constructora:
var Persona = function(name) {
    this.name = name;
};

var luis = new Persona('luis');
console.log(luis.name);

Persona.prototype.saluda = function(){ //Es como si esta funcion la hubieramos declarado dentro de persona.
    console.log("hola soy "+this.name);
};

luis.saluda();

//Haciendo herencia de Persona:

//funcion constructora que hereda de persona

var Agente = function(name){
    //Ejecutamos constructor heredado
    //Lo mismo que llamar a super() en otros lenguajes
    Persona.call(this,name);
};
//Se lleva a cabo la herencia
Agente.prototype = new Persona('soy un prototipo'); 
var smith = new Agente('smith');
smith.saluda();