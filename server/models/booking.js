module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    restaurant_id: DataTypes.INTEGER,
    booker_id: DataTypes.INTEGER,
    booked_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
  }, {
    tableName: 'bookings',
    timestamps: false,
    underscored: true,
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
    Booking.belongsTo(models.User, { foreignKey: 'booker_id' });
    Booking.hasMany(models.BookedTable, { foreignKey: 'booking_id' });
  };

  return Booking;
};