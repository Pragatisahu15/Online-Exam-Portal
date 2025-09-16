const validator = require("validator");

module.exports = function (req, res, next) {
  const { username, email, password } = req.body;

  // Username check
  if (!username || username.trim().length < 3) {
    return res.status(400).json({ message: "Username must be at least 3 characters long" });
  }

  // Email check
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // Password check
  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  next(); //passed validation → move to controller
};
