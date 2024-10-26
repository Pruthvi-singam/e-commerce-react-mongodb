const express = require('express');
const { createProduct, getAllProducts, getSingleProduct } = require('../controller/productCtrl');
const router = express.Router();

router.post('/add', createProduct); // Uncomment if creating new products via API
router.get('/getallproducts', getAllProducts);
router.post('/getsingleproduct', getSingleProduct);

module.exports = router;
