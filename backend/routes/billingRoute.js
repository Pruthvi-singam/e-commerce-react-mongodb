const express = require('express');
const { productPurchase, getPurchaseHistory } = require('../controller/billingCtrl');
const router = express.Router();

router.post('/productpurchase', productPurchase);
router.post('/getpurchasehistory', getPurchaseHistory);

module.exports = router;
