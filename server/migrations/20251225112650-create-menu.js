'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menus', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      restaurant_id: { type: Sequelize.INTEGER, references: { model: 'restaurants', key: 'id' } },
      item_name: { type: Sequelize.STRING },
      item_description: { type: Sequelize.STRING },
      item_available: { type: Sequelize.BOOLEAN, defaultValue: true },
      rating: { type: Sequelize.INTEGER },
      price: { type: Sequelize.FLOAT }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('menus');
  }
};