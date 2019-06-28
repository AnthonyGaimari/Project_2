//Express routes 

var express = require('express');
var router = express.Router();
var dog = require('../models/dog');
var orm = require('../config/orm');

router.get('/api/dogs', function (req, res) {
    dog.allGoodDogs(function (error, dog_data) {
        res.json(dog_data);
    })
});

router.get('/api/dogs/:id', function (req, res) {
    var id = req.params.id
    dog.dogById(id, function (error, dog_data) {
        res.json(dog_data);
    })
});

router.post('/api/dogs', function (req, res) {
    var newDog = {
    //Place Holder Dog // to be deleted
        dog_id: 3,
        dog_name: "Brett",
        dog_breed: "Shib",
        dog_age: 5,
        dog_img_url: "www.google.com",
        dog_blurb: "Goodest Boi"
    }
    dog.insertDog(newDog, function (error, dog_data) {
        if (error) {
            res.json(error)
        } else {
            res.json(dog_data);
        }
    })
});


module.exports = router;