module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    menu_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    is_available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    tableName: 'menu_items',
    timestamps: false,
    underscored: true,
  });

  MenuItem.associate = (models) => {
    MenuItem.belongsTo(models.Menu, {
      foreignKey: 'menu_id',
    });
    MenuItem.hasMany(models.BookingItem, {
      foreignKey: 'menu_item_id',
    });
  };

  return MenuItem;
};
