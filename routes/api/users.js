const router = require("express").Router();
const usersController = require("../../controllers/userController");
// const passport = require("passport")
const passport = require("../../config/passport")

// Matches with "/api/users"
  router
  .route("/signup")
  .get(usersController.findAll)
  .post(usersController.create);


//matches with "api/users/login"


  router
  .route("/login")
  .post(usersController.findByEmail)
  
  router
  .route("/userhome")
  .get(passport.authenticate('jwt', { session : false }), usersController.findById);
    


  router
  .route("/:id")
  .get(usersController.findAndPopulate);
    
  

module.exports = router;