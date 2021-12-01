var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const measure_unitSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

var Measure_Unit = mongoose.model("Measure_Unit", measure_unitSchema);

module.exports = Measure_Unit;