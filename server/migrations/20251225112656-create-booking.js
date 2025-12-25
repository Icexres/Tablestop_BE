'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: { type: Sequelize.UUID, defaultValue: Sequelize.literal('uuid_generate_v4()'), primaryKey: true },
      restaurant_id: { type: Sequelize.INTEGER, references: { model: 'restaurants', key: 'id' } },
      booker_id: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' } },
      booked_time: { type: Sequelize.DATE },
      end_time: { type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('bookings');
  }
};