const User = require('../models/usermodel');
const Product = require('../models/productModel');

// Purchase product
const productPurchase = async (req, res) => {
  try {
    const { user_id, product_id, price, quantity } = req.body; // Ensure to get quantity from request body

    // Update the product's sales history
    const product = await Product.findById(product_id);
    if (product) {
      // Update the product's sales history
      product.sales_history.push({
        user_id,
        price,
        date: new Date(), // Add the current date
        quantity, // Add the quantity
      });
      await product.save();
    } else {
      return res.status(400).send("Product not found.");
    }

    // Update the user's purchase history
    const user = await User.findById(user_id);
    if (user) {
      user.purchase_history.push({
        product_id,
        price,
        date: new Date(), // Add the current date
        quantity, // Add the quantity
      });
      await user.save();
      return res.status(200).send("Purchase successful.");
    } else {
      return res.status(400).send("User not found.");
    }
  } catch (error) {
    console.error("Error processing purchase:", error);
    return res.status(500).send("Internal server error.");
  }
};

const getPurchaseHistory = async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log('Fetching purchase history for user ID:', user_id); // Keep this line to log user ID

    const user = await User.findById(user_id, 'purchase_history');
    console.log('User found.'); // Change the log statement to avoid printing user details

    if (user) {
      // Map the purchase history to include only the required fields
      const purchaseHistory = user.purchase_history.map(purchase => ({
        product_id: purchase.product_id, // Ensure this matches the key used when pushing to purchase_history
        price: purchase.price,
        date: purchase.date,
        quantity: purchase.quantity,
      }));

      return res.status(200).json({ message: 'success', data: purchaseHistory });
    } else {
      console.log('User not found for ID:', user_id);
      return res.status(400).send("User not found.");
    }
  } catch (error) {
    console.error("Error fetching purchase history:", error);
    return res.status(500).send("Internal server error.");
  }
};

module.exports = { productPurchase, getPurchaseHistory };
