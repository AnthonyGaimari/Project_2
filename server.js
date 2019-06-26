require('dotenv').config();

var express = require('express');
var exphbs = require("express-handlebars");
var createError = require('http-errors');
var app = express();
var port = process.env.PORT || 9000;
var connection = require("./config/connection")


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Route Setup
var indexLanding = require('./routes/landing');
var indexHome = require('./routes/home');
var usersRouter = require('./routes/users');
var usersFavorites = require('./routes/favorites');


// you should change this to be wherever your html files are
app.use(express.static(__dirname + '/views')); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Route Paths
app.use('/', indexLanding);
app.use('/home', indexHome);
app.use('/users', usersRouter);
app.use('/favorites', usersFavorites);

// app.listen(port);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;

  app.listen(port, function () {


