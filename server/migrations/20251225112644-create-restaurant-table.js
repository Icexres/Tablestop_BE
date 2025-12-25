'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restaurant_tables', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      restaurant_id: { type: Sequelize.INTEGER, references: { model: 'restaurants', key: 'id' } },
      table_number: { type: Sequelize.STRING },
      table_status: { type: Sequelize.STRING }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('restaurant_tables');
  }
};