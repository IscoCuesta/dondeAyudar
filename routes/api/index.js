const router = require("express").Router();
const orgRoutes = require("./organizations");
const postRoutes = require("./posts");

// Book routes
router.use("/orgs", orgRoutes);
router.use("/posts", postRoutes);

module.exports = router;
