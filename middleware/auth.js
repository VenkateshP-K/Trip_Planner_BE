const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const User = require("../models/user");

const auth = {
    isAuth: async (req, res, next) => {
      const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
      }
  
      try {
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userId = decodedToken.id || decodedToken.userId;
        next();
      } catch (error) {
        console.error("Token verification error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
      }
    },  

    isAuthAdmin: async (req, res, next) => {
      try {
        const userId = req.userId; // Assumes isAuth was already run to set req.userId
        if (!userId) {
          return res.status(401).json({
            success: false,
            message: "Unauthorized: No user ID found",
          });
        }
  
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({
            success: false,
            message: "User not found",
          });
        }
  
        if (user.userType !== "admin") {
          return res.status(403).json({
            success: false,
            message: "Forbidden: Admin access required",
          });
        }
  
        next(); // User is admin, proceed to the next middleware/route
      } catch (error) {
        console.error("Admin check error:", error.message);
        return res.status(500).json({
          success: false,
          message: "Internal server error",
          error: error.message,
        });
      }
    },
};

module.exports = auth;