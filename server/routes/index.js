const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

// Public routes only (no authentication required)
router.post('/auth/signup', authController.signup);
router.post('/auth/login', authController.login);

const routes = router;

module.exports = { routes };