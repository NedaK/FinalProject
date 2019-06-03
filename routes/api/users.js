const router = require("express").Router();
const usersController = require("../../controllers/userController");
// const passport = require("passport")
const passport = require("../../config/passport")

// Matches with "/api/users"
router.route("/signup")
  .get(usersController.findAll)
  // .get(usersController.findByEmail)
  .post(usersController.create);

// Matches with "/api/users/:id"
// router
//   .route("login/:id")
//   .get(usersController.findById);
//   .put(usersController.update)
//   .delete(usersController.remove);

//matches with "api/users/login"


router
  // .route('/login', passport.authenticate('jwt', { session : false }), function(req, res) {
  //   res.send(req.user.profile);
  // })
  .route("/login")
  .post(usersController.findByEmail)
  //.get(usersController.findById);

  

   router
    .route("/userhome")
    .get(passport.authenticate('jwt', { session : false }), usersController.findById);
    // .get(usersController.findById);


    router
    .route("/:id")
    .get(usersController.findAndPopulate);
    // .get(passport.authenticate('jwt', { session : false }), usersController.findById); 
//router

// .route("/userhome")
// .get(passport.authenticate('jwt', { session: false }),
//   function(req, res) {
//     res.send(req.user.profile);
    
// }
// );
  
  // .get(passport.authenticate('jwt', { session: false }), function(req, res){
  //   res.json("Success! You can not see this without a token");
  // });
  

module.exports = router;