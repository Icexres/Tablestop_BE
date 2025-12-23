module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    restaurant_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'menus',
    timestamps: true,
    underscored: true,
  });

  Menu.associate = (models) => {
    Menu.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
    });
    Menu.hasMany(models.MenuItem, {
      foreignKey: 'menu_id',
    });
  };

  return Menu;
};
