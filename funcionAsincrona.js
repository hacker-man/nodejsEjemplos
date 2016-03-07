"use strict";

console.log("Empiezo");
//Declaracion de la función:
var escribeTras2Segundos = function (text, callback) {
    setTimeout(function(){
        console.log(text);
        callback();
    },2000);
    
};
//Llamada a la función:
escribeTras2Segundos("texto1",function(){ //El callback
    escribeTras2Segundos("texto2",function(){
           console.log("Fin");
    });
 	//console.log("Fin1");
});
