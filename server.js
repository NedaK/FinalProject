const express = require("express");
//const session = require('express-session')
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('passport')
const app = express();
const bodyParser =require("body-parser");
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//create sessions

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(
//   session({
//   secret: 'neds is awesome', resave: false, saveUninitialized: false
//   })
// )
app.use(passport.initialize());
// Passport config
require("./config/passport") //(passport);
 
//app.use(passport.session()); 

// Add routes, both API and view
app.use(routes);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hesaidshesaid");
mongoose.set('useFindAndModify', false);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
