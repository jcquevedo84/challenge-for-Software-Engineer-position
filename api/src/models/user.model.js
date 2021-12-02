const mongo = require("mongoose");

const User = mongo.model(
  "User",
  new mongo.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    lastname: String,
    sexo: String,
    status: Boolean,
    rol: String,
    uuid: String
  })
);

module.exports = User;
