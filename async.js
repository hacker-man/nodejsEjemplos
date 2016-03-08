"use strict";
var asyn = require('async');

console.log("Empiezo");
var escribeTras2Segundos = function (text, callbackNuestro) {
    setTimeout(function () {
        console.log(text);
        callbackNuestro(null,text);
    }, 2000);

};

asyn.eachSeries([1,2,3,4,5],function cada(item,siguiente){
    escribeTras2Segundos(item,function(err,str){
        //var res = item%2 ? null:'error';
        //console.log(str);
        siguiente(); //No entiendo este callback
    });
},function fin(err){
    console.log("fin",err);
});

