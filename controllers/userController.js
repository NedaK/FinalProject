const db = require("../models");
const validateSignUpInput = require("../validation/signup");
const validateLoginInput = require("../validation/login");

//const express = require("express");
//const router = express.Router();
//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res){
      console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;
        const { errors, isValid } = validateLoginInput(req.body);

        if (!isValid) {
          return res.status(400).json(errors);
        }

    db.User
        .findOne({email: email})
        .then(user => {
            if(!user){
                return res.status(404).json({ emailnotfound: "Email not found" });
            }
            user.comparePassword(password, function(err, isMatch) {
                 if (err) throw err;
               console.log('Password', isMatch); 
               
              if(isMatch){
                const payload = {
                  id: user.id,
                  name: user.name
                }

                jwt.sign(
                  payload,
                  keys.secretOrKey,
                  {
                    expiresIn: 31556926 // 1 year in seconds
                  },
                  (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  }
                );
                //console.log(token);
              } else {
                return res.status(400).json({ passwordincorrect: "Password incorrect" });
              }
            });
          }) 
        //.then() res.json(dbModel)
        .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      // console.log("in create" +JSON.stringify(req.body));
      const { errors, isValid } = validateSignUpInput(req.body);
      // console.log("Errors" + JSON.stringify(errors));
      // console.log("Validated" +isValid)
      // Check validation
        if (!isValid) {
          return res.status(400).json(errors);
        }
       db.User.findOne({ email: req.body.email }).then(dbModel => {
          if (dbModel) {
              console.log("Already in use! Made it here")
           return res.status(400).json({ email: "Email already exists" });
         } 
           if(!dbModel){
      
      db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
           }
           });
        
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
