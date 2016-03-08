"use strict";

var evtEmitter = new (require("events")).EventEmitter();

evtEmitter.on("llamada de telefono",function(){
    console.log("ring ring");
});

evtEmitter.on("llamada de telefono",function(){
    console.log("brr brr");
});

evtEmitter.emit("llamada de telefono");