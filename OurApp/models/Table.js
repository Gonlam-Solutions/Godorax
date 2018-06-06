const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableSchema = new Schema({
  tableNumber: {
    type: Number,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Tables", TableSchema);

