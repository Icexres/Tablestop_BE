module.exports = (sequelize, DataTypes) => {
  const RestaurantTable = sequelize.define('RestaurantTable', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    restaurant_id: DataTypes.INTEGER,
    table_number: DataTypes.STRING,
    table_status: DataTypes.STRING,
  }, {
    tableName: 'restaurant_tables',
    timestamps: false,
    underscored: true,
  });

  RestaurantTable.associate = (models) => {
    RestaurantTable.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
    RestaurantTable.hasMany(models.BookedTable, { foreignKey: 'table_id' });
  };

  return RestaurantTable;
};