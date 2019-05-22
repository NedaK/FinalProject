const router = require("express").Router();
const pollsController = require("../../controllers/pollController");

// Matches with "/api/polls"
router.route("/")
  .get(pollsController.findAll)
  .post(pollsController.create);

  router.route("/createPoll")
  .get(pollsController.findAll)
  .post(pollsController.create);

// Matches with "/api/polls/:id"
router
  .route("/:id")
  .get(pollsController.findByAuthor)
  // .get(pollsController.findById)
  .put(pollsController.update)
  .delete(pollsController.remove);

module.exports = router;
