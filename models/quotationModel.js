const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
  id: { type: Number},
  type: String,
  quotation: String,
  author: String,
  timestamp: { type: Number, required: false}
});

const Quotation = mongoose.model('Quotation', quotationSchema);

module.exports = Quotation;