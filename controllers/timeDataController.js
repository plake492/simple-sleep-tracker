const db = require("../models ");

module.exports = {
  findAll: (req, res) => {
    console.log("\nGet all Data\n", req.body);
    db.TimeData.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveTimeData: (req, res) => {
    console.log("\nAdded Time\n", req);
    db.TimeData.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
