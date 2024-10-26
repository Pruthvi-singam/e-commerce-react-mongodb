// routes/cartRoute.js
const express = require("express");
const Cart = require("../models/Cart");

const router = express.Router();

// Get cart items for a specific user
router.get("/cart", async (req, res) => {
  const userId = req.query.userId; // Assuming you send the user's Firebase UID from the frontend
  try {
    const cart = await Cart.findOne({ userId });
    if (cart) {
      res.json(cart);
    } else {
      res.json({ items: [] });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart items" });
  }
});

// Add items to the cart
router.post("/cart/add", async (req, res) => {
  const { userId, product } = req.body; // Expect userId and product details in the request body

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex((item) => item.productId.equals(product._id));

    if (itemIndex !== -1) {
      // Item already exists, increase quantity
      cart.items[itemIndex].quantity += 1;
    } else {
      // Add new item to the cart
      cart.items.push({
        productId: product._id,
        quantity: 1,
        Original_Price: product.Original_Price,
        Image: product.Image,
        Title: product.Title,
      });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Error adding item to cart" });
  }
});

module.exports = router;
