// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { getUserById } = require("../controller/userCtrl.js");

router.post("/user/getUserDetails", getUserById);

module.exports = router;
