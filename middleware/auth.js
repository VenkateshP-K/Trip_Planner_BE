const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const User = require("../models/user");

const auth = {
  isAuth: (req, res, next) => {
    const token = req.cookies.token ||  req.headers.authorization?.split(' ')[1];

    if (!token) {
      console.log("Token missing from cookies.");
      return res.status(401).json({ message: "Unauthorized access" });
    }

    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      console.log("Decoded Token:", decodedToken); // Debug decoded token
      req.userId = decodedToken.id;
      next();
    } catch (err) {
      console.error("Token verification failed:", err);
      if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid token" });
      } else if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.status(500).json({ message: err.message });
      }
    }
  },

  isAuthAdmin: (req, res, next) => {
    const token = req.cookies.token ||  req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);

      if (decodedToken.id && decodedToken.userType === "admin") {
        req.userId = decodedToken.id;

        req.userType = decodedToken.userType;
        next();
      } else {
        return res.status(403).json({ message: "Forbidden: Admins only" });
      }
    } catch (err) {
      if (err.name === "JsonWebTokenError") {
        res.status(401).json({ message: "Invalid token" });
      } else if (err.name === "TokenExpiredError") {
        res.status(401).json({ message: "Token expired" });
      } else {
        res.status(500).json({ message: err.message });
      }
    }
  },
};

module.exports = auth;