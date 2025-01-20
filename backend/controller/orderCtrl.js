// controllers/orderCtrl.js
const User = require("../models/usermodel");
const Product = require("../models/productModel");

const getOrderHistory = async (req, res) => {
  try {
    const { user_id } = req.body;

    // Fetch user with specific fields in purchase_history
    const user = await User.findById(user_id, "purchase_history");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Retrieve purchase history
    const purchaseHistory = user.purchase_history;

    // Initialize an array to hold enriched purchase objects
    const enrichedPurchaseHistory = [];

    // Loop through each purchase and append product details
    for (const purchase of purchaseHistory) {
      // Fetch product details using product_id
      const product = await Product.findById(purchase.product_id);

      if (product) {
        // Create a new object combining purchase and product details
        const enrichedPurchase = {
      // Convert Mongoose subdocument to plain object
          productTitle: product.Title,
          productImage: product.Image,
          productVideo: product.Video,
          productCategory: product.Category,
          productPrice: purchase.price,
          productPurchaseDate:purchase.date,
          productQuantity: purchase.quantity

        };
        enrichedPurchaseHistory.push(enrichedPurchase);
      }
    }
    // Respond with the enriched purchase history
    res.status(200).json({ message: "success", data: enrichedPurchaseHistory });
  } catch (error) {
    console.error("Error fetching order history:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = { getOrderHistory };
