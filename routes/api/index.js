const router = require("express").Router();
const pollRoutes = require("./polls");
const userRoutes = require("./users");
//const passport = require("../../config/passport")

// Book routes
router.use("/polls", pollRoutes);
router.use("/users", userRoutes);

module.exports = router;
