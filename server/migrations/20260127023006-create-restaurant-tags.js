'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restaurant_tags', {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
      },
      restaurant_id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'restaurants', 
          key: 'id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tag_name: { 
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('restaurant_tags');
  }
};