'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('req_verifies', {
      req_id: { type: Sequelize.UUID, defaultValue: Sequelize.literal('uuid_generate_v4()'), primaryKey: true },
      requester_id: { type: Sequelize.INTEGER, references: { model: 'users', key: 'id' } },
      processor_id: { type: Sequelize.INTEGER, references: { model: 'super_admins', key: 'id' } },
      request_status: { type: Sequelize.ENUM('processing', 'processed', 'rejected'), defaultValue: 'processing' },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      processed_at: { type: Sequelize.DATE }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('req_verifies');
  }
};