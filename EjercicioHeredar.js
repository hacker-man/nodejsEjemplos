"use strict";
var extend = require('util')._extend;
var EventEmitter = require("events").EventEmitter;
//var evtEmitter = new EventEmitter();
var Persona = function(name) {
    this.name = name;
    this.hola = function(){
        console.log("hola");
    }
};

Persona.prototype.saluda = function(){ //Es como si esta funcion la hubieramos declarado dentro de persona.
    console.log("hola soy "+this.name);
};

var objetoQueHereda  = function(name){
    Persona.call(this,name);
};
//objetoQueHereda.prototype = new Persona("soy un prototipo");
objetoQueHereda.prototype = extend(objetoQueHereda.prototype,EventEmitter.prototype);
objetoQueHereda.prototype = extend(objetoQueHereda.prototype,Persona.prototype);

var o = new objetoQueHereda('pepito');
//console.log(o);
o.saluda();
o.hola();
o.on("asd",function(data){
   console.log("Soy asd"); 
});
o.emit("asd");