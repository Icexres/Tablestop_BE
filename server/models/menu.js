module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    restaurant_id: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
    item_description: DataTypes.STRING,
    item_available: { type: DataTypes.BOOLEAN, defaultValue: true },
    rating: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
  }, {
    tableName: 'menus',
    timestamps: false,
    underscored: true,
  });

  Menu.associate = (models) => {
    Menu.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id' });
  };

  return Menu;
};