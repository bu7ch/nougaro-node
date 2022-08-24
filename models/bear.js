const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bearSchema = new Schema({
  name: String,
});

const Bear = mongoose.model("Bear", bearSchema);

module.exports = Bear;
