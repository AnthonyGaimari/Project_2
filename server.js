require('dotenv').config();

var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var config = require('./config/config');

app.use(express.static(__dirname + '/views')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port);


$(document).ready(function() {        
$('.carousel').carousel()
});
 

//@TODO Delete below after you verify the the app is working
app.route('/').get(function(request, response) {
    response.json(config);
});