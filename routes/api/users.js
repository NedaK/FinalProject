const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  // .get(usersController.findByEmail)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);
  
//matches with "api/users/login"
router
  .route("/login")
  .post(usersController.findByEmail);

module.exports = router;