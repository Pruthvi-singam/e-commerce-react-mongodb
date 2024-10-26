const User = require('../models/usermodel');

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
// Register function
const register = async (req, res) => {
  try {
    const { name, mobile, email, address } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ mobile }, { email }] });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Create a new user
    const newUser = new User({
      name,
      mobile,
      email,
      address,
      purchase_history: []
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).send("User registered successfully");
  } catch (error) {
    res.status(400).send("Failed to register user");
  }
};



// Logout function
const logout = (req, res) => {
  res.status(200).send("success");
};

module.exports = { login, register, logout };