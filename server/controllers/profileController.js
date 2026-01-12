const { updateService, getService } = require('../services');

const profileController = {
  // Get profile
  async getProfile(req, res, next) {
    try {
      const userId = req.decoded.id;
      const profile = await getService.getProfileData(userId);

      return res.status(200).json({
        success: true,
        data: profile
      });
    } catch (error) {
      next(error);
    }
  },

  // Update complete profile (username, phone, bio, photo) - ALL IN ONE
  async updateCompleteProfile(req, res, next) {
    try {
      const userId = req.decoded.id;
      const { username, phone, bio } = req.body;

      // Update username and phone if provided
      if (username || phone) {
        await updateService.updateUserInfo(userId, { username, phone });
      }

      // Handle profile photo and bio
      let photoUrl = null;
      if (req.file) {
        photoUrl = `/uploads/${req.file.filename}`;
      }

      // Update profile (bio and/or photo)
      if (bio || photoUrl) {
        await updateService.updateProfile(userId, {
          bio,
          ...(photoUrl && { profile_photo_url: photoUrl })
        });
      }

      // Get complete updated profile
      const updatedProfile = await getService.getProfileData(userId);

      return res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: updatedProfile
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = profileController;