module.exports = (sequelize, DataTypes) => {
  const BookedTable = sequelize.define('BookedTable', {
    booking_id: { type: DataTypes.UUID, primaryKey: true },
    table_id: { type: DataTypes.INTEGER, primaryKey: true },
  }, {
    tableName: 'booked_tables',
    timestamps: false,
    underscored: true,
  });

  BookedTable.associate = (models) => {
    BookedTable.belongsTo(models.Booking, { foreignKey: 'booking_id' });
    BookedTable.belongsTo(models.RestaurantTable, { foreignKey: 'table_id' });
  };

  return BookedTable;
};