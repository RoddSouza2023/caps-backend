const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: {type: String, unique: true},
  password: String,
  token: String,
  verified: { type: Boolean, default: false },
  cart: Array,
});


const User = mongoose.model("User", UserSchema);

module.exports = User;