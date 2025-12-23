"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("booking_items", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        primaryKey: true,
      },
      booking_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "bookings", key: "id" },
        onDelete: "CASCADE",
      },
      menu_item_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "menu_items", key: "id" },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price_at_time: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("booking_items");
  },
};
