'use strict';
//Objeto con métodos
var persona = {
    name:"Luis",
    printName: function(){
        console.log(this.name);
    }
};

var mascota = {
  name:"Tobi"
};
persona.printName();
//llamarlo sin this
setTimeout(persona.printName.bind(persona),1000);

function saluda(func){
    func(); //El dueño de la funcion es saluda en modo estricto. Daria fallo si llamamos sin this
    //Sin use strict, el this es el global y daria undefined.
}
persona.printName.call(mascota);
saluda(persona.printName.bind(mascota));