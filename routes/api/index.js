const router = require("express").Router();
const orgRoutes = require("./organizations");
const postRoutes = require("./posts");
const userRoutes = require("./user");

// Book routes
router.use("/orgs", orgRoutes);
router.use("/posts", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
