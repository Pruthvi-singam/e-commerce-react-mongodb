const express = require('express');
const { login, register, logout } = require('../controller/authCtrl');
const router = express.Router();

// POST route for login
router.post('/login', login);

// POST route for register
router.post('/register', register);

// POST route for logout (for future use)
router.post('/logout', logout);

module.exports = router;
