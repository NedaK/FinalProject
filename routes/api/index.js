const router = require("express").Router();
const pollRoutes = require("./polls");
const userRoutes = require("./users");

// Book routes
router.use("/polls", pollRoutes);
router.use("/users", userRoutes);

module.exports = router;
