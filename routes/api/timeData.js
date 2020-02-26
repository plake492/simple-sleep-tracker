const router = require("express").Router();
const timeDataController = require("../../controllers/timeDataController");

router
  .route("/")
  .post(timeDataController.saveTimeData)
  .get(timeDataController.findAll);

module.exports = router;
