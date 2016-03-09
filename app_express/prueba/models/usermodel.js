"use strict";
var users = [{name:'Juan',age:30},{name:'neo',age:27}];
var user = {
    getUsers: function(callback){
        //Imaginamos que leemos un fichero
        var usariosLeidos = users;
        //devuelvo users:
        callback(null,usariosLeidos )
        //return users;
    }
}
module.exports = user;