module.exports = function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  next();
};
