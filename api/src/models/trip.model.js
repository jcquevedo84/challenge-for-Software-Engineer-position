const mongo = require("mongoose");

const Trip = mongo.model(
  "Trip",
  new mongo.Schema({
    name: String
  })
);

module.exports = Trip;
