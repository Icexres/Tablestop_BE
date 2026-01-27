module.exports = (sequelize, DataTypes) => {
  const RestaurantTag = sequelize.define('RestaurantTag', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
    tag_name: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'restaurant_tags',
    timestamps: false,
    underscored: true,
  });

  RestaurantTag.associate = (models) => {
    RestaurantTag.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
  };

  return RestaurantTag;
  
};