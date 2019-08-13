const router = require("express").Router();
const orgController = require("../../controllers/orgController");

// Matches with "/api/orgs"
router
  .route("/")
  .get(orgController.findAll)
  .post(orgController.create);

// Matches with "/api/orgs/uid"
router
  .route("/uid")
  .get(orgController.findAll)
  .post(orgController.findOne);

// Matches with "/api/orgs/:id"
router
  .route("/:id")
  .get(orgController.findById)
  .put(orgController.update)
  .delete(orgController.remove);

module.exports = router;
