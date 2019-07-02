//Routes


var express = require('express');
var router = express.Router();
var dog = require('../models/dog');
var user = require('../models/user');
var favorites = require('../models/favorites');

var orm = require('../config/orm');

//Get all dogs
router.get('/api/dogs', function (req, res) {
    dog.allGoodDogs(function (error, dog_data) {
        res.json(dog_data);
    })
});

//Get dog by ID
router.get('/api/dogs/:id', function (req, res) {
    var id = req.params.id
    dog.dogById(id, function (error, dog_data) {
        res.json(dog_data);
    })
});

//Add a new dog
router.post('/api/dogs', function (req, res) {

    //Place Holder Dog // to be deleted 
    var newDog = {
        dog_name: "Dog1",
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

//USERS

router.post('/api/users', function (req, res) {
    var newUser = {
        //Place Holder User // to be deleted
        username: "Nick",
        user_email: "nick@gamblin.com"
    }
    user.insertUser(newUser, function (error, user_data) {
        if (error) {
            res.json(error)
        } else {
            res.json(user_data);
        }
    })
});
 
router.post('/api/user/login', function (req, res) {
    // var username = req.body.username
    // var password = req.body.password

    var loginAttempt = {
        username: 'Nick',
        password: 'password',
      }
    console.log(loginAttempt)
    user.userByUsername(loginAttempt, function (error, user_data) {
        console.log(user_data)
        user = user_data[0];
        if (user.password === loginAttempt.password) {
            res.status(200)
        } else
            res.status(400).json({ 'error': 'Incorrect username or password' });
    })


});

router.post('/api/user/favorites', function (req, res) {
    var currUser_id = 3;
    favorites.getUserFavorites(currUser_id, function (error, favorites_data) {
        if (error) {
            res.json(error)
        } else {
            res.json(favorites_data);
        }
    })
});


module.exports = router;