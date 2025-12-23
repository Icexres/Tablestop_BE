module.exports = (sequelize, DataTypes) => {
  const RestaurantTable = sequelize.define('RestaurantTable', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    restaurant_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    table_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    tableName: 'restaurant_tables',
    timestamps: false,
    underscored: true,
  });

  RestaurantTable.associate = (models) => {
    RestaurantTable.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
    });
    RestaurantTable.hasMany(models.Booking, {
      foreignKey: 'table_id',
    });
  };

  return RestaurantTable;
};
