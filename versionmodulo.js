"use strict";
//Cargar libreria
var fs = require('fs');

function versionModulo(modulo, callback) {

    fs.readFile('./node_modules/'+modulo+'/package.json', {encoding: 'utf8'}, function (err, data) {
        if (err) {
           // console.log("Error!", err);
            callback(err);
            return; //Seria lo mismo si ponemos el return arriba.
        }
        
        var paquete = JSON.parse(data);
        var version = paquete["version"];
        callback(null,version);
        });
    

};

versionModulo('chance', function (err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La version del módulo es:', str);
});