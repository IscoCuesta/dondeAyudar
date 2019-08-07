const router = require("express").Router();
const AuthRoutes = require("./Auth");

// Book routes
router.use("/auth", AuthRoutes);

module.exports = router;
