"use strict";
//Cargar libreria
var fs = require('fs');

//Leer fichero de texto en utf-8 y sacar en consola
//su contenido
fs.readFile('./package.json',{encoding:'utf8'},function(err,data){
    if (err){
       console.log("Error!",err);  
      return; //Seria lo mismo si ponemos el return arriba.
    } 
    
    var paquete = JSON.parse(data);
    console.log(paquete);
    console.log("Fin");
});