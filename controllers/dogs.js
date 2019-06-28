//Express routes 

var express = require('express');
var router = express.Router();
var dog = require('../models/dog');
var orm = require('../config/orm');

router.get('/api/dogs', function(req,res){
    dog.allGoodDogs(function(error, dog_data){
        res.json(dog_data);
    })
})

module.exports = router;