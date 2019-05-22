var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

const pollSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    heSaid: String,
    sheSaid: String,
     created_at: { type: Date, default: Date.now },
     closing_date: Date,
     poll_length: Number,
     votes: [
        {
            heSaid: String,
            he_votes: Number
        },
        {
            sheSaid: String,
            she_votes: Number
        }
    ],
    is_closed: {type: Boolean, default: false},
    winner: String
     
  });
  

// This creates our model from the above schema, using mongoose's model method
var Poll = mongoose.model("Poll", pollSchema);

// Export the Note model
module.exports = Poll;
