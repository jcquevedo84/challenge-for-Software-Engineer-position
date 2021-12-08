const mongo = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongo.Schema({
    username: {
      type: String,
      unique: true,
      require: true,
    },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    name: { type: String, default: '' },
    lastname: { type: String, default: '' },
    sexo: { type: String, default: '' },
    status: Boolean,
    rol: {
      type: String,
      require: true,
    },
    uuid: String
  });

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.password
  }
})

userSchema.plugin(uniqueValidator)

const User = mongo.model('User', userSchema)

module.exports = User;
