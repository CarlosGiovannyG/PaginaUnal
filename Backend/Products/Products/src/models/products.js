var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    default:0,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  measure_unit: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Measure_Unit',
    required: true
  },
}, {
  timestamps: true
});

var Products = mongoose.model("Product", productsSchema);

module.exports = Products;
