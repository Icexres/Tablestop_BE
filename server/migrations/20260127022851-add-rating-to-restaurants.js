'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('restaurants', 'rating', {
      type: Sequelize.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('restaurants', 'rating');
  }
};