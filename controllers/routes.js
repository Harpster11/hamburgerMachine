var express = require('express');
var router = express.Router();
var burger = require("../models/burger");

router.get('/', function(req, res){
    // calling burger within the burger.js file
    burger.all(function(burger_data){
        console.log("Burgers",burger_data);
        res.render('index',{burger_data});
    })
});

router.post('/burgers/update',function(req,res){
    console.log('burger update route')
    burger.update(req.body.burger_id, function(result){
        console.log("Put update route:",result);
        res.redirect('/');
    });
});

router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
});

module.exports = router;
