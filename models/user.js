
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  //username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true},
  date: { type: Date, default: Date.now },
  password: {type:String, required:true},
  
  polls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }],
  
});


userSchema.pre('save', function(next) {
    var user = this;

// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});


});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);



// const mongoose = require("mongoose");
// var bcrypt = require("bcryptjs");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   username: String,
//   email: String,
//   date: { type: Date, default: Date.now },
//   password: {type:String, required:true},
//   polls: [{ type: Schema.Types.ObjectId, ref: 'Poll' }],
  
// });
// const User = mongoose.model("User", userSchema);

// Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  // User.prototype.validPassword = function(password) {
    
  //   return bcrypt.compare(password, this.password);
  // };
  
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
//   User.hook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
  



// module.exports = User;
