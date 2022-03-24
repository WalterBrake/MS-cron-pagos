"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    //atributes
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastPayment: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  });
  User.associate = function (models) {
    console.log(models)
    User.hasMany(models.Payment, {
      foreignKey: "userId",
    });
  };
  return User;
};
