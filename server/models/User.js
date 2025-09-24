const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  year: String,
  branch: String,
});

module.exports = mongoose.model("User", userSchema);
