"use strict";
module.exports = (sequelize, DataTypes) => {
  const Lastpayment = sequelize.define("Lastpayment", {
    //atributes
    lastpaymentId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    paymentId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      onDelete: "no action",
      onUpdate: "no action",
      references: {
        model: "Payments",
        key: "paymentId",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    },
  });
  Lastpayment.associate = function (models) {};
  return Lastpayment;
};
