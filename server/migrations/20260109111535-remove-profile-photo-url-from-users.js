'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'profile_photo_url');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'profile_photo_url', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};