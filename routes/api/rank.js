const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/rank/:userNum/:seasonId/:userNum"
router
  .route("/:userNum/:seasonId/:userNum")
  .get(usersController.findUserGames)

// Matches with "/api/rank/:userNum/seasonId"
router
  .route("/:userNum/:seasonId")
  .get(usersController.findUserStats)


module.exports = router;