"use strict";
var objeto = {
    vuela: function(){
        console.log("volando voy");
    }
}
module.exports = objeto; //Aquí basta con modulo.objeto

//Export con nombre:
//exports.objeto = objeto; //Para cargalo hay que usar la propiedad .objet -> modulo.objeto.vuela();


//Ejemplo con dos objetos:
/*module.exports = {
    objeto1: objeto,
    objeto2:{
        nada:function(){console.log("nadando voy");}
    }
}; */