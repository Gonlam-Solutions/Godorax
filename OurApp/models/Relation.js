const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RelationSchema = new Schema({
  table: {
    type: Number,
    required: true
  },
  product:{
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Relation", RelationSchema);
