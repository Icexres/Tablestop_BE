'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restaurant_photos', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      restaurant_id: { type: Sequelize.INTEGER, references: { model: 'restaurants', key: 'id' } },
      photo_url: { type: Sequelize.STRING },
      uploaded_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('restaurant_photos');
  }
};