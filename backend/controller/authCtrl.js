const User = require('../models/userModel');

// Login function
const login = async (req, res) => {
  try {
    const { mobile, email } = req.body;

    const user = await User.findOne({ $or: [{ mobile }, { email }] });
    if (user) {
      return res.status(200).send("success");
    } else {
      return res.status(400).send("failed");
    }
  } catch (error) {
    res.status(400).send("failed");
  }
};

// Register function
const register = async (req, res) => {
  try {
    const { name, mobile, email, address } = req.body;

    const newUser = new User({ name, mobile, email, address, purchase_history: [] });
    await newUser.save();

    res.status(200).send("success");
  } catch (error) {
    res.status(400).send("failed");
  }
};

// Logout function
const logout = (req, res) => {
  res.status(200).send("success");
};

module.exports = { login, register, logout };
