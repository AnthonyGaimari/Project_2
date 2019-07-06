//Routes


var express = require('express');
var router = express.Router();
var dog = require('../models/dog');
var user = require('../models/user');
var favorites = require('../models/favorites');
// var orm = require('../config/orm');

//======DOG ROUTES=========================================================

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
    console.log(req.body)
    var newDog = req.body;
  
    dog.insertDog(newDog, function (error, dog_data) {
        if (error) {
            res.json(error)
        } else {
            res.json(dog_data);
        }
    })
});

//=====USER ROUTES=========================================================

router.post('/api/users', function (req, res) {
    // var newUser = {
    //     //Place Holder User // to be deleted
    //     username: "Nick",
    //     user_email: "nick@gamblin.com"
    // }
    console.log(req.body)
    var newUser = req.body;

    user.insertUser(newUser, function (error, user_data) {
        if (error) {
            res.json(error)
        } else {
            res.json(user_data);
        }
    })
});

router.post('/api/user/login', function (req, res) {

// console.log("________req.body__________")
// console.log(req.body);
//  console.log(req.body.username);
 var username = req.body.username
    user.userByUsername(username, function (error, user_data) {
        // console.log(user_data)
        // loggedInUser = user_data[0].user_id
        var user = user_data[0];
        console.log("User Data:" +JSON.stringify(user_data[0]))
        console.log(req.body.password)
        if (typeof user !== 'undefined') {
            if (user.password === req.body.password){
                res.status(200).json({ 'message': 'All good', 'currUser': user_data[0].user_id });
            
            } else {
                res.status(400).json({ 'error': 'Incorrect username or password' });
            }
        
        } else {
            res.status(404).json({'error': 'user not found'});
        }

    })


//=======FAVORITE ROUTES===================================================================

});

router.get("/api/user/favorites/:currUser_id", function (req, res) {
    var user_id = req.params.currUser_id
    console.log("I'm in the favorites route: " + user_id)
    console.log(user_id)
    favorites.getUserFavorites(user_id, function (error, favorites_data) {
        if (error) {
            res.json(error)
        } else {
            res.json(favorites_data);
        }
    })
});


router.post('/api/favorites', function (req, res) {
    // var newUser = {
    //     //Place Holder User // to be deleted
    //     username: "Nick",
    //     user_email: "nick@gamblin.com"
    // }
    console.log(req.body)
    var new_favorite = req.body;

    favorites.insertFavorite(new_favorite, function (error, favorite_data) {
        if (error) {
            res.json(error)
        } else {
            res.json(favorite_data);
        }
    })
});


module.exports = router;