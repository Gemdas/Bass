// *************************************************************
// *** To Dos
// =============================================================
// ****** Admin Page
// ****** New User Page
// ****** Sequelize to Create New User
// ****** Dynamically Create Tee Sheet Table
// ****** Email Notifications to Admin Page
// ****** Get User ID during Authentication
// ****** Handlebars Views
// ****** Style Front End



// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var passport = require("passport");
var Strategy = require("passport-local").Strategy;
var session = require("express-session");
var env = require("dotenv").load();
var exphbs = require("express-handlebars")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static directory
app.use(express.static("public"));

// setting handlebars server
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
var htmlRoute = require("./routes/htmlRoutes.js")(app);
var apiRoute = require("./routes/apiRoute.js")(app);
var loginRoute = require('./routes/loginRoute.js')(app,passport);

//load passport strategies
require('./config/passport.js')(passport, db.user);

// For Passport
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.post('/', 
  passport.authenticate('local', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  }
);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
