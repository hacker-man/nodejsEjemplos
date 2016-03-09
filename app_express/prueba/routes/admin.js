"use strict";

var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    console.log(req.query);
    res.send('Hola Express');
});

router.get("/:id([0-9]+)/piso/:piso(A|B|C)",function(req,res){
    console.log(req.params,'el id es',req.params.id,' el piso es',req.params.piso);
    res.send('Hola Express')
});

router.get("/:id",function(req,res){
    console.log(req.params);
    res.send('Hola Express');
});


router.post('/',function(req,res){
    //post a: http://localhost:3000/admin
    console.log(req.body);
    res.send("body recogido");
})
module.exports = router;