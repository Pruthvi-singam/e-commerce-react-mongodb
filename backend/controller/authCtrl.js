const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');
// Login function
const login = async (req, res) => {
  try {
    const { mobile, email } = req.body;

    const user = await User.findOne({ $and: [{ mobile }, { email }] });
    if (user) {

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // The secret key to sign the JWT
 // Set expiration to 1 hour
    );
      return res.status(200).send({message:"success",userId: user._id, token});
      
    } else {
      return res.status(404).send({message:"Invalid Credentials"});
    }
  } catch (error) {
    res.status(400).send({message:"Login failed"});
  }
};


// Register function
const register = async (req, res) => {
  try {
    const { name, mobile, email, address } = req.body;
  
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ mobile }, { email }] });
    if (existingUser) {
      return res.status(400).send({message:"Mobile Number or Email already exists"});
      
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

    res.status(200).send({message:"User registered successfully"});
  
  } catch (error) {
    res.status(400).send({message:"Failed to register user"});
  }
};



// Logout function
const logout = (req, res) => {
  res.status(200).send("success");
}

module.exports = { login, register, logout };
