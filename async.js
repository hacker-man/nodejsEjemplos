"use strict";
var asyn = require('async');

console.log("Empiezo");
var escribeTras2Segundos = function (text, callbackNuestro) {
    setTimeout(function () {
        console.log(text);
        callbackNuestro();
    }, 2000);

};

asyn.eachSeries([1,2,3,4,5],function cada(item,siguiente){
    escribeTras2Segundos(item,function(){
        //var res = item%2 ? null:'error';
        siguiente(); //No entiendo este callback
    });
},function fin(err){
    console.log("fin",err);
});

