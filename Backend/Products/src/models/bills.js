var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billsSchema = new Schema({
  id_user: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
      
    }
  ],
}, {
  timestamps: true
});

var Bills = mongoose.model("Bills", billsSchema);

module.exports = Bills;