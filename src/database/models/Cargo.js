"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cargo extends Model {
    static associate(models) {
      Cargo.hasOne(models.Funcionario, { foreignKey: "cargo_id" });
    }
  }
  Cargo.init(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        get() {
          const value = this.getDataValue("nome");
          return value ? value.toLowerCase() : value;
        },
      },
      salario: { type: DataTypes.FLOAT, allowNull: false },
    },

    {
      sequelize,
      modelName: "Cargo",
      tableName: "cargos",
    }
  );
  return Cargo;
};
