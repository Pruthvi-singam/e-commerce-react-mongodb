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

module.exports = { createProduct, getAllProducts, getSingleProduct };
