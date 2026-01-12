const { User, Profile } = require('../models');

const updateService = {
  // Update profile (bio and/or profile photo)
  async updateProfile(userId, profileData) {
    const { bio, profile_photo_url } = profileData;
    
    const user = await User.findByPk(userId);
    if (!user) {
      throw { statusCode: 404, message: 'User not found' };
    }
    
    // Find existing profile
    let profile = await Profile.findOne({ where: { user_id: userId } });
    
    if (profile) {
      // Update existing profile - only update fields that are provided
      const updateData = {};
      if (bio !== undefined) updateData.bio = bio;
      if (profile_photo_url !== undefined) updateData.profile_photo_url = profile_photo_url;
      
      await profile.update(updateData);
    } else {
      // Create new profile if doesn't exist
      profile = await Profile.create({
        user_id: userId,
        bio: bio || null,
        profile_photo_url: profile_photo_url || null
      });
    }
    
    // Return updated profile with user info
    return await Profile.findOne({
      where: { user_id: userId },
      include: [{
        model: User,
        as: 'user',
        attributes: ['id', 'username', 'email', 'phone', 'role']
      }]
    });
  },

  // Update user basic info (username, phone)
  async updateUserInfo(userId, userData) {
    const { username, phone } = userData;
    
    const user = await User.findByPk(userId);
    if (!user) {
      throw { statusCode: 404, message: 'User not found' };
    }
    
    const updateData = {};
    if (username !== undefined) updateData.username = username;
    if (phone !== undefined) updateData.phone = phone;
    
    await user.update(updateData);
    
    return user;
  }
};

module.exports = updateService;