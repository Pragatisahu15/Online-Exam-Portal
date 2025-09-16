const jwt = require("jsonwebtoken");

/**
 * Middleware to verify JWT token and attach user info to req.user
 * Token must be sent in headers as: { "Authorization": "Bearer <token>" }
 */
const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1]; // remove "Bearer"

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded; // { id: ..., role: ... }
    next();
  } catch (err) {
    console.error("Invalid token:", err.message);
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
