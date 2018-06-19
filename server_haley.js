var express = require('express')
var app = express()
var bodyParser = require('body-parser')
//var db = require("./models/index.js")
var PORT = process.env.PORT || 3000;
var db = require("./models/index.js");
var database = require("./models");

var passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("public"));


var NodeSession = require('node-session');

// init
var nodeSession = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});

function session(req, res, next){
    nodeSession.startSession(req, res, next);
}

app.use(session);


// init
 

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

var routes_dogs = require("./controllers/dogs_controller.js");
var routes_adopter = require("./controllers/adopter_controller.js");
var routes_shelter = require("./controllers/shelter_controller.js");
require("./controllers/emailController.js");
require('./controllers/favouriteController.js')(app);



    //Models
var models = require("./models");




app.use(passport.initialize());
//app.use(passport.session());

app.use( routes_dogs);
app.use( routes_adopter);
app.use( routes_shelter);


//Routes
require('./routes/auth-routes.js')(app,passport);

//load passport strategies
require('./config/passport.js')(app,passport,models.user);
require('./controllers/auth/facebook.js')(app,passport,models.user);
require('./controllers/auth/google.js')(app,passport,models.user);

 
db.sequelize.sync().then(function(){
 app.listen(PORT, function(){
      console.log("Server listening on: http://localhost:" + PORT);
  })
})
