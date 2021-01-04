const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/data"
router
  .route("/:data")
  .get(usersController.findData)

module.exports = router;