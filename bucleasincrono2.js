"use strict";

console.log("Empiezo");
var escribeTras2Segundos = function (text, callback) {
    setTimeout(function () {
        console.log(text);
        callback();
    }, 2000);

};

//En este caso la funcion serie recibe un array
function serie(lista,fn) {
 if(lista.length==0){
      console.log('fin');
         return;
 } 
 //lista.shift devuelve el primer elemento de la lista
 fn(lista.shift(),function(){
    serie(lista,fn); //Esto sera el callback
 });
}

serie([1,2,3,4,5],escribeTras2Segundos);