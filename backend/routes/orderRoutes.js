// routes/orderRoutes.js
const express = require("express");
const { getOrderHistory } = require("../controller/orderCtrl");

const router = express.Router();

// Route to get order history for a user
router.post("/order-history", getOrderHistory);

module.exports = router;
