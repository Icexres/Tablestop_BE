module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: { type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user' },
    profile_photo_url: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'users',
    timestamps: true,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Restaurant, { foreignKey: 'admin_id' });
    User.hasMany(models.Booking, { foreignKey: 'booker_id' });
    User.hasMany(models.ReqVerify, { foreignKey: 'requester_id' });
  };

  return User;
};