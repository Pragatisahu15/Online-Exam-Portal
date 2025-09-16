const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateRegister = require('../middleware/validateRegister');
const validateLogin = require('../middleware/validateLogin');

// Registration route
router.post('/register', validateRegister, authController.register);

// Login route
router.post('/login', validateLogin, authController.login);

module.exports = router;

