const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeDataSchema = new Schema({
  time: { type: String }
});

const TimeData = mongoose.model("TimeData", timeDataSchema);

module.exports = TimeData;
