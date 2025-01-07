"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    static associate(models) {
      Funcionario.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuarioId",
      });
      Funcionario.belongsTo(models.Cargo, {
        foreignKey: "cargo_id",
        as: "cargoId",
      });
      Funcionario.hasMany(models.Venda, {
        foreignKey: "id_funcionario",
        as: "funcionarioId",
      });
    }
  }
  Funcionario.init(
    {
      usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      cargo_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      matricula: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Funcionario",
      tableName: "funcionarios",
      paranoid: true,
      scopes: {
        todos: { where: {} },
      },
    }
  );
  return Funcionario;
};
