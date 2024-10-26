const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  Title: { type: String, required: true, unique: true },
  Category: { type: String, required: true },
  Image: { type: String, required: true },
  Video: { type: String, required: true },
  Original_Price: { type: Number, required: true },
  Release_Date: { type: String, required: true },
  sales_history: { type: Array, default: [] }
});

module.exports = mongoose.model('Product', productSchema);
