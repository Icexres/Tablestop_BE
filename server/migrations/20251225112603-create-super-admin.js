'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('super_admins', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      s_username: { type: Sequelize.STRING },
      s_email: { type: Sequelize.STRING, unique: true },
      s_password: { type: Sequelize.STRING }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('super_admins');
  }
};