const express = require('express');
const { profileController } = require('../controllers');
const uploader = require('../utils/uploader-multer');

const router = express.Router();

// Profile routes (all require authentication)
router.get('/profile', profileController.getProfile);
router.put('/profile/complete', uploader.single('profilePic'), profileController.updateCompleteProfile);

module.exports = router;