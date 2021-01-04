const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/data"
router
  .route("/hash")
  .get(usersController.findData)

module.exports = router;