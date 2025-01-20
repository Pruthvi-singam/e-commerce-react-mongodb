const express = require('express');
const { productPurchase, getPurchaseHistory } = require('../controller/billingCtrl');
const router = express.Router();

router.post('/productpurchase', productPurchase);
router.post('/getpurchasehistory', (req, res, next) => {
    console.log('Received request for purchase history:', req.body); // Log request body
    next();
}, getPurchaseHistory);


module.exports = router;
