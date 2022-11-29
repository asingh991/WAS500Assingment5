const mongoose = require("mongoose"),
  bookSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number,
  });
module.exports = mongoose.model("Book", bookSchema);