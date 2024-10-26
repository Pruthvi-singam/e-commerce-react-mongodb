// models/Cart.js
const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: {
    type: String, // Store Firebase UID or user identifier here
    required: true,
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
      Original_Price: { type: Number },
      Image: { type: String },
      Title: { type: String },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
