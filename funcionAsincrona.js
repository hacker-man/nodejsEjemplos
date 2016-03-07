"use strict";

console.log("Empiezo");
var escribeTras2Segundos = function (text, callback) {
    setTimeout(function(){
        console.log(text);
        callback();
    },2000);
    
};

escribeTras2Segundos("texto",function(){
    escribeTras2Segundos("texto2",function(){
           console.log("Fin");
    });
 
});
