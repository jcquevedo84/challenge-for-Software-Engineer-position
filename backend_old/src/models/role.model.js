const mongo = require("mongoose");

const Role = mongo.model(
  "Role",
  new mongo.Schema({
    name: String
  })
);

module.exports = Role;
