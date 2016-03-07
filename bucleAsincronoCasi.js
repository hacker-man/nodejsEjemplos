"use strict";
console.log("Empiezo");

var escribeTras2Segundos = function (texto,callback) {
	setTimeout(function() {
		console.log(texto);
		callback();
	},2000);
}
//Declaración de la función serie
function serie (i) {
	escribeTras2Segundos('texto '+i,function(){
		if(i==0){
			console.log("Fin");
			return;
		}
			i--;
			serie(i);
		
	});
}
//Utilización de la función serie
serie(10);