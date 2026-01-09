module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    user_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false,
      unique: true
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_photo_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'profiles',
    timestamps: true,
    underscored: true,
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  };

  return Profile;
};