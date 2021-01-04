const router = require("express").Router();
const userRoutes = require("./user");
const rankRoutes = require("./rank");
const dataRoutes = require("./data");

// Book routes
router.use("/user", userRoutes);
router.use("/rank", rankRoutes);
router.use("/data", dataRoutes);

module.exports = router;
