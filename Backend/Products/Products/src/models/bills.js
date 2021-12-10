var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billsSchema = new Schema({
  id_user: {type: Number, required: true, trim: true },
  products: [{
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' }
  }],
}, {
  timestamps: true
});


  module.exports = mongoose.model("Bills", billsSchema);