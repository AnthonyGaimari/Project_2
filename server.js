require("dotenv").config();

var express = require("express");
var app = express();
var port = process.env.PORT || 9000;
var connection = require("./config/connection")



app.use(express.static(__dirname + "/views")); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/[[route_filename_here]]");

// app.use(routes);

app.listen(port, function () {

<<<<<<< Updated upstream
    console.log("Server listening on: http://localhost:" + port);
});

=======
//@TODO Delete below after you verify the the app is working
app.route('/').get(function(request, response) {
    response.json(config);
});
>>>>>>> Stashed changes
