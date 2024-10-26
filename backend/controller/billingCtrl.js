const User = require('../models/userModel');
const Product = require('../models/productModel');

// Purchase product
const productPurchase = async (req, res) => {
  try {
    const { user_id, product_id, price } = req.body;

    const product = await Product.findById(product_id);
    if (product) {
      product.sales_history.push({ id: user_id, price });
      await product.save();
    } else {
      return res.status(400).send("failed");
    }

    const user = await User.findById(user_id);
    if (user) {
      user.purchase_history.push({ id: product_id, price });
      await user.save();
      res.status(200).send("success");
    } else {
      res.status(400).send("failed");
    }
  } catch (error) {
    res.status(400).send("failed");
  }
};

// Get purchase history for a user
const getPurchaseHistory = async (req, res) => {
  try {
    const { user_id } = req.body;

    const user = await User.findById(user_id, 'purchase_history');
    if (user) {
      res.status(200).json({ message: 'success', data: user.purchase_history });
    } else {
      res.status(400).send("failed");
    }
  } catch (error) {
    res.status(400).send("failed");
  }
};

module.exports = { productPurchase, getPurchaseHistory };
