"use strict";
//Ejemplo mal hecho: bucleAsincronoCasi, solución cuasi valida.
console.log("Empiezo");
var escribeTras2Segundos = function (text, callback) {
    setTimeout(function(){
        console.log(text);
        callback();
    },2000);
    
};

for(var i=0;i<10;i++){
    escribeTras2Segundos("texto"+i,function(){
        if(i==10){ //Cuando terminan de esperar evaluan esto, al final i vale 10.
          console.log("Fin");  
        } 
    });
}