"use strict";
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    //atributes
    paymentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      onDelete: "no action",
      onUpdate: "no action",
      references: "Users",
      referencesKey: "userId",
    },
    monto: {
      type: DataTypes.FLOAT(7, 2),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    },
  });
  Payment.associate = function (models) {};
  return Payment;
};
