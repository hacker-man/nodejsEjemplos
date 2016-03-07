"use strict";

console.log("Empiezo");
var escribeTras2Segundos = function (text, callback) {
    setTimeout(function () {
        console.log(text);
        callback();
    }, 2000);

};


function serie(lista,fn) {
 if(lista.length==0){
      console.log('fin');
         return;
 } 
 fn(lista.shift(),function(){
    serie(lista,fn);
 });
}

serie([1,2,3,4,5],escribeTras2Segundos);