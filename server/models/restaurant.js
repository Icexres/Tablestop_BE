module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    admin_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
  }, {
    tableName: 'restaurants',
    timestamps: true,
    underscored: true,
  });

  Restaurant.associate = (models) => {
    Restaurant.belongsTo(models.User, {
      foreignKey: 'admin_id',
      as: 'admin',
    });
    Restaurant.hasMany(models.RestaurantTable, {
      foreignKey: 'restaurant_id',
    });
    Restaurant.hasMany(models.Menu, {
      foreignKey: 'restaurant_id',
    });
    Restaurant.hasMany(models.Booking, {
      foreignKey: 'restaurant_id',
    });
  };

  return Restaurant;
};
