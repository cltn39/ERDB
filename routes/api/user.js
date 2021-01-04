const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router
  .route("/")
  .get(usersController.findByNickName)

// Matches with "/api/user/:userNum"
router
  .route("/:userNum")
  .get(usersController.findUserGames)

// Matches with "/api/user/:userNum/seasonId"
router
  .route("/:userNum/:seasonId")
  .get(usersController.findUserStats)


module.exports = router;
