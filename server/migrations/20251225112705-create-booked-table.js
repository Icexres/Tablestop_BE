'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booked_tables', {
      booking_id: { type: Sequelize.UUID, references: { model: 'bookings', key: 'id' }, primaryKey: true },
      table_id: { type: Sequelize.INTEGER, references: { model: 'restaurant_tables', key: 'id' }, primaryKey: true }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('booked_tables');
  }
};