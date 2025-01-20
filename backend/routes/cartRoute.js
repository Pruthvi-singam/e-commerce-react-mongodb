// routes/cartRoute.js
const express = require("express");
const Cart = require("../models/Cart");
const Product = require('../models/productModel');
const router = express.Router();

// Get all cart details for a specific user
router.post("/user-cart", async (req, res) => {
  const userId = req.body.userId; // Extract userId from the query string

  try {
    const cart = await Cart.findOne({ userId }).lean();

    if (cart) {

      res.status(200).json(cart);
    } else {
      res.status(200).json({ message: "Cart not found." });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart items" });
  }
});

// Example of adding items to the cart
router.post("/add", async (req, res) => {
  const { userId, productId, productTitle,productCategory,productImage,product_Original_Price } = req.body;

  try {
      let cart = await Cart.findOne({ userId });

      if (!cart) {
          console.log("Creating new cart for user:", userId);
          cart = new Cart({
              userId,
              items: [{ productId, Title:productTitle,Category:productCategory,Image:productImage,Original_Price:product_Original_Price, quantity: 1 }],
          });
      } else {
          console.log("Cart found, checking items:", cart.items);
          const itemIndex = cart.items.findIndex(item => item.productId == productId); // Adjust based on productId type

          if (itemIndex !== -1) {
              console.log("Item exists in cart, incrementing quantity.");
              cart.items[itemIndex].quantity += 1;
          } else {
              console.log("Adding new item to cart.");
              cart.items.push({ productId, Title:productTitle,Category:productCategory,Image:productImage,Original_Price:product_Original_Price, quantity: 1 });
          }
      }

      await cart.save();
      res.status(200).json(cart);
  } catch (err) {
      console.error("Error adding to cart:", err);
      res.status(500).json({ message: "Error adding item to cart" });
  }
});

// Increase quantity
router.post("/increase", async (req, res) => {
  const { userId, itemId } = req.body;

  try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
          return res.status(404).json({ message: "Cart not found." });
      }

      const itemIndex = cart.items.findIndex(item => item._id == itemId);

      if (itemIndex === -1) {
          return res.status(404).json({ message: "Item not found in cart." });
      }

      cart.items[itemIndex].quantity += 1; // Increment quantity
      await cart.save();
      res.status(200).json(cart);
  } catch (err) {
      res.status(500).json({ message: "Error increasing item quantity" });
  }
});

// Decrease quantity
router.post("/decrease", async (req, res) => {
  const { userId, itemId } = req.body;
  try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
          return res.status(404).json({ message: "Cart not found." });
      }
  
      const itemIndex = cart.items.findIndex(item => item._id==itemId);

      if (itemIndex === -1) {
          return res.status(404).json({ message: "Item not found in cart." });
      }

      if (cart.items[itemIndex].quantity > 1) {
          cart.items[itemIndex].quantity -= 1; // Decrement quantity
      } else {
          cart.items.splice(itemIndex, 1); // Remove item if quantity is 1
      }

      await cart.save();

      res.status(200).json(cart);
  } catch (err) {
      res.status(500).json({ message: "Error decreasing item quantity" });
  }
});


// Remove items or adjust quantity
router.post("/remove-item", async (req, res) => {
  const { userId, itemId } = req.body;
  try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
          return res.status(404).json({ message: "Cart not found." });
      }

      const itemIndex = cart.items.findIndex(item => item._id == itemId);

      if (itemIndex === -1) {
          return res.status(404).json({ message: "Item not found in cart." });
      }

          cart.items.splice(itemIndex, 1);
          await cart.save();
          return res.status(200).json(cart);
      
  } catch (err) {
      console.error("Error removing item from cart:", err); // Log the error for debugging
      res.status(500).json({ message: "Error removing item from cart" });
  }
});


// Add items to the cart
// router.post("/add", async (req, res) => { 
//   const { userId, productId } = req.body; // Expect userId and productId in the request body

//   try {
//       let cart = await Cart.findOne({ userId });

//       if (!cart) {
//           // If the cart doesn't exist, create a new one with the product
//           cart = new Cart({
//               userId,
//               items: [{ productId, quantity: 1 }]
//           });
//       } 
//       else {
//           // Check if the product is already in the cart
//           const itemIndex = cart.items.findIndex((item) => item.productId.equals(productId));

//           if (itemIndex !== -1) {
//               // If the product exists, increment the quantity
//               cart.items[itemIndex].quantity += 1;
//           } else {
//               // If the product doesn't exist, add it with quantity = 1
//               cart.items.push({ productId, quantity: 1 });
//           }
//       }

//       // Save the cart with the updated items
//       await cart.save();
//       res.status(200).json(cart);
//   } catch (err) {
//       res.status(500).json({ message: "Error adding item to cart" });
//   }
// });




module.exports = router;



