'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restaurants', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      admin_id: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' } },
      restaurant_name: { type: Sequelize.STRING },
      restaurant_location: { type: Sequelize.STRING },
      restaurant_desc: { type: Sequelize.STRING },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      verified: { type: Sequelize.BOOLEAN, defaultValue: false },
      verified_by: { type: Sequelize.INTEGER, references: { model: 'super_admins', key: 'id' } },
      verified_at: { type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('restaurants');
  }
};