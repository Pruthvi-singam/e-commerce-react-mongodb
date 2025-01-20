const Product = require('../models/productModel');

// Create product
const createProduct = async (req, res) => {
  try {
    const { Title, Category, Image, Video, Original_Price, Release_Date } = req.body;
    const formattedReleaseDate = new Date(Release_Date).toISOString().split('T')[0];

    const newProduct = new Product({
      Title,
      Category,
      Image,
      Video,
      Original_Price,
      Release_Date: formattedReleaseDate,
      sales_history: []
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: savedProduct });
  } catch (error) {
    res.status(400).json({ message: 'Error adding product', error: error.message });
  }
};


// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ message: 'success', data: products });
  } catch (error) {
    res.status(400).send("failed");
  }
};


// Get single product by ID
const getSingleProduct = async (req, res) => {
  try {
    const { product_id } = req.body;
    const product = await Product.findById(product_id);
    if (product) {
      res.status(200).json({ message: 'success', data: product });
    } else {
      res.status(400).send("failed");
    }
  } catch (error) {
    res.status(400).send("failed");
  }
};



// Fetch products by an array of IDs
const getProductsByIds = async (req, res) => {
  try {
    const { productIds } = req.body; // Expecting an array of product IDs in the request body

    // Validate that productIds is an array
    if (!Array.isArray(productIds)) {
      return res.status(400).json({ message: 'Product IDs should be an array.' });
    }

    // Find all products with IDs in the provided array
    const products = await Product.find({ _id: { $in: productIds } });

    res.status(200).json({ message: 'success', data: products });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};




// Delete product by ID
const deleteProduct = async (req, res) => {
  try {
    const { product_id } = req.body;
    const product = await Product.findByIdAndDelete(product_id);
    if (product) {
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

// Increase product quantity
const increaseQuantity = async (req, res) => {
  try {
    const { product_id, amount } = req.body; // Expecting product ID and the amount to increase
    const product = await Product.findById(product_id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.quantity += amount; // Increase the quantity
    const updatedProduct = await product.save(); // Save the updated product

    res.status(200).json({ message: 'Quantity increased successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error increasing quantity', error: error.message });
  }
};

// Decrease product quantity
const decreaseQuantity = async (req, res) => {
  try {
    const { product_id, amount } = req.body; // Expecting product ID and the amount to decrease
    const product = await Product.findById(product_id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.quantity < amount) {
      return res.status(400).json({ message: 'Insufficient quantity to decrease' });
    }

    product.quantity -= amount; // Decrease the quantity
    const updatedProduct = await product.save(); // Save the updated product

    res.status(200).json({ message: 'Quantity decreased successfully', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error decreasing quantity', error: error.message });
  }
};


module.exports = { createProduct, getAllProducts, getSingleProduct, deleteProduct, getProductsByIds,increaseQuantity,decreaseQuantity };

