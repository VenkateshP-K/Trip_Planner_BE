const User = require("../models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const userController = {
  register: async (req, res) => {
    try {
      const { firstname, lastname, email, phone, password } = req.body;

      let passwordHash = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstname,
        lastname,
        email,
        phone,
        password : passwordHash,
      });

      await newUser.save();

      res.status(201).json({
        message: "User created successfully!",
      });
    } catch (err) {
      if (err.status === 400) {
        return res.status(400).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        {
          id: user._id,
          userType: user.userType,
        },
        JWT_SECRET,
        { expiresIn: "24h" }
      );
  
      const isProduction = process.env.NODE_ENV === "production";
  
      res.cookie("token", token, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        expires: new Date(Date.now() + 24 * 3600 * 1000),
      });
  
      res.status(200).json({ message: "Logged in successfully!", token });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  },  

  me: async (req, res) => {
    try {
      const user = await User.findById(req.userId).select("-password");
      if (!user) {
        return res.status(404).json({ message: "User not found or unauthorized" });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      console.error("Error in /me route:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  logout: async (req, res) => {
    try {
      if (!req.cookies.token) {
        return res.status(401).json({ message: "No token found" });
      }
  
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.status(204).send({message : "User Logged Out Successfully"});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const userId = req.userId;

      const user = await User.findById(userId);

      const { firstname, lastname, phone, email, password } = req.body;

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      await user.updateOne({ $set: { firstname, lastname, phone, email, password } });

      res.status(200).json({ message: "user updated successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

//get all users
allUsers: async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},
};
module.exports = userController;