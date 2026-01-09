'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profiles', {
      id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
      },
      user_id: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        unique: true,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      bio: { 
        type: Sequelize.TEXT,
        allowNull: true
      },
      profile_photo_url: { 
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
      },
      updated_at: { 
        type: Sequelize.DATE, 
        defaultValue: Sequelize.NOW 
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('profiles');
  }
};