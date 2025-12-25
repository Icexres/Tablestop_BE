module.exports = (sequelize, DataTypes) => {
  const RestaurantPhoto = sequelize.define('RestaurantPhoto', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    restaurant_id: DataTypes.INTEGER,
    photo_url: DataTypes.STRING,
    uploaded_at: DataTypes.DATE,
  }, {
    tableName: 'restaurant_photos',
    timestamps: false,
    underscored: true,
  });

  RestaurantPhoto.associate = (models) => {
    RestaurantPhoto.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
  };

  return RestaurantPhoto;
};