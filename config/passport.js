const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
//const mongoose = require("mongoose");

var db = require("../models");
//const User = mongoose.model("users");
const keys = require("./keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      db.User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};




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
// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

// Exporting our configured passport
//module.exports = passport;