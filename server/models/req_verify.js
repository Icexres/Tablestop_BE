module.exports = (sequelize, DataTypes) => {
  const ReqVerify = sequelize.define('ReqVerify', {
    req_id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    requester_id: { type: DataTypes.INTEGER },
    processor_id: { type: DataTypes.INTEGER },
    request_status: { type: DataTypes.ENUM('processing', 'processed', 'rejected'), defaultValue: 'processing' },
    created_at: DataTypes.DATE,
    processed_at: DataTypes.DATE,
  }, {
    tableName: 'req_verifies',
    timestamps: false,
    underscored: true,
  });

  ReqVerify.associate = (models) => {
    ReqVerify.belongsTo(models.User, { foreignKey: 'requester_id' });
    ReqVerify.belongsTo(models.SuperAdmin, { foreignKey: 'processor_id' });
  };

  return ReqVerify;
};