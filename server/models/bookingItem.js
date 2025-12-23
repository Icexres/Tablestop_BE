module.exports = (sequelize, DataTypes) => {
  const BookingItem = sequelize.define('BookingItem', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    booking_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    menu_item_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price_at_time: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    tableName: 'booking_items',
    timestamps: false,
    underscored: true,
  });

  BookingItem.associate = (models) => {
    BookingItem.belongsTo(models.Booking, {
      foreignKey: 'booking_id',
    });
    BookingItem.belongsTo(models.MenuItem, {
      foreignKey: 'menu_item_id',
    });
  };

  return BookingItem;
};
