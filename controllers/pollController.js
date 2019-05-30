const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    let date = new Date();
    console.log("In find all polls " + date)
    db.Poll
      .find({closing_date:{
          $gte : date
      }})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAuthor: function(req, res) {
    const authid = "ObjectId("+req.params.id +")"
    console.log("In findByAuth" + req.params.id)
    db.Poll
      .find({author: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Poll
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  

  create: function(req, res) {
    console.log("poll data " + JSON.stringify(req.body));
    db.Poll
      .create(req.body)
      .then(dbModel => 
        db.User.findByIdAndUpdate(dbModel.author, { $push: {polls: dbModel._id} }, {new: true}))
        .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) { 
    var vote = req.body.vote;
    console.log(vote)    
    db.Poll
      .findOneAndUpdate({ _id: req.params.id },  { $inc: {[vote]: 1 } }, {new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Poll
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
