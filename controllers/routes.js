var express = require('express');
var router = express.Router();
var burger = require("../models/burger");

router.get('/', function(req, res){
    // calling burger within the burger.js file
    burger.all(function(burger_data){
        console.log("Burgers",burger_data);
        res.render('index');
    })
});

module.exports = router;
