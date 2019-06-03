const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport    = require('passport');
//const mongoose = require("mongoose");

var db = require("../models");
//const User = mongoose.model("users");
const keys = require("./keys");


// module.exports = passport => {
  // var passport = require("passport");
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = keys.secretOrKey;
  var jwts = function (jwt_payload, done) {
    console.log("JWT strategy");
    console.log(jwt_payload);
    //done();
    db.User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          console.log("Valid")
          return done(null, user);
          
        }
        console.log("not valid")
        return done(null, false);
      })
      .catch(err => console.log(err));
  }
  passport.use(
    new JwtStrategy(opts, jwts)
  );
  module.exports = passport;




//Local Passport strategy without JWT
// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;
// var db = require("../models");

// passport.use(new LocalStrategy(

//   function(username, password, done) {
//     db.Users.findOne({
//       where: {
//         username: username
//       }
//     }).then(function(dbUser) {
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Incorrect username."
//         });
//       }

//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }

//       return done(null, dbUser);
//     });
//   }
// ));
//

// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// Exporting our configured passport
//module.exports = passport;