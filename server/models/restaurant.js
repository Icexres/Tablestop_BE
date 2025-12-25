module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    admin_id: DataTypes.INTEGER,
    restaurant_name: DataTypes.STRING,
    restaurant_location: DataTypes.STRING,
    restaurant_desc: DataTypes.STRING,
    created_at: DataTypes.DATE,
    verified: { type: DataTypes.BOOLEAN, defaultValue: false },
    verified_by: DataTypes.INTEGER,
    verified_at: DataTypes.DATE,
  }, {
    tableName: 'restaurants',
    timestamps: false,
    underscored: true,
  });

  Restaurant.associate = (models) => {
    Restaurant.belongsTo(models.User, { foreignKey: 'admin_id' });
    Restaurant.belongsTo(models.SuperAdmin, { foreignKey: 'verified_by' });
    Restaurant.hasMany(models.RestaurantPhoto, { foreignKey: 'restaurant_id' });
    Restaurant.hasMany(models.RestaurantTable, { foreignKey: 'restaurant_id' });
    Restaurant.hasMany(models.Menu, { foreignKey: 'restaurant_id' });
    Restaurant.hasMany(models.Booking, { foreignKey: 'restaurant_id' });
  };

  return Restaurant;
};