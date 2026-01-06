const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

// All routes here will be protected by JWT middleware from app.js
router.get('/auth/profile', authController.getProfile);

// Add more protected routes here later
// router.get('/restaurant/my-restaurants', restaurantController.getMyRestaurants);
    // router.post('/booking/create', bookingController.create);

module.exports = router;