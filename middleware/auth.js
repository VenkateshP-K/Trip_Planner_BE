const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");

const auth = {
  isAuth: (req, res, next) => {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access: No token provided" });
    }

    try {
      const decodedToken = jwt.verify(token, JWT_SECRET);
      req.userId = decodedToken.id;
      next();
    } catch (err) {
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
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized access: No token provided" });
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
        return res.status(401).json({ message: "Invalid token" });
      } else if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.status(500).json({ message: err.message });
      }
    }
  },
};

module.exports = auth;