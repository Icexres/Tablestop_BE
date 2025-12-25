module.exports = (sequelize, DataTypes) => {
  const SuperAdmin = sequelize.define('SuperAdmin', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    s_username: DataTypes.STRING,
    s_email: { type: DataTypes.STRING, unique: true },
    s_password: DataTypes.STRING,
  }, {
    tableName: 'super_admins',
    timestamps: false,
    underscored: true,
  });

  SuperAdmin.associate = (models) => {
    SuperAdmin.hasMany(models.ReqVerify, { foreignKey: 'processor_id' });
    SuperAdmin.hasMany(models.Restaurant, { foreignKey: 'verified_by' });
  };

  return SuperAdmin;
};