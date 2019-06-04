const router = require("express").Router();
const pollsController = require("../../controllers/pollController");
const passport = require("../../config/passport")


// Matches with "/api/polls"
router.route("/")
  .get(pollsController.findAllOpen)
  // .post(pollsController.create)
  .put(pollsController.updateAllClosed);

  router.route("/closed")
  //.get(pollsController.findAll)
  .get(pollsController.findAllClosed);  

  router.route("/managePolls")
  //.get(pollsController.findAll)
  .post(passport.authenticate('jwt', { session : false }), pollsController.create);
  // .post(pollsController.create);

// Matches with "/api/polls/:id"
router
  .route("/:id")
  .get(passport.authenticate('jwt', { session : false }), pollsController.findByAuthor)
  // .get(pollsController.findByAuthor)
  // .get(pollsController.findById)
  .put(passport.authenticate('jwt', { session : false }),pollsController.update)
  .delete(passport.authenticate('jwt', { session : false }),pollsController.remove);

module.exports = router;
