const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const User = require("../models/user");

const auth = {
  isAuth: async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log("Received token:", token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      console.log("Decoded Token:", decodedToken); // Debugging
      req.userId = decodedToken.id || decodedToken.userId; // Ensure consistency
      next();
    } catch (error) {
      console.error("Token verification error:", error);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  },

  isAuthAdmin: async (req, res, next) => {
    try {
      const userId = req.userId;
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      if (user.userType !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    } catch (error) {
      console.error("Admin check error:", error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = auth;