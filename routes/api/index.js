const router = require("express").Router();
const timeDataRoutes = require("./timeData");

router.use("/timedata", timeDataRoutes);

module.exports = router;
