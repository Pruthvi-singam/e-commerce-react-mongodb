const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  purchase_history: { type: Array, default: [] }
});

module.exports = mongoose.model('User', userSchema);
