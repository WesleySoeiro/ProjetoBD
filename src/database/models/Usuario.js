"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasOne(models.Funcionario, {
        foreignKey: "usuario_id",
        as: "funcionarioId",
      });
      Usuario.hasMany(models.Venda, {
        foreignKey: "id_cliente",
        as: "clienteId",
      });
    }
  }
  Usuario.init(
    {
      nome: {
        type: DataTypes.STRING,
        get() {
          const value = this.getDataValue("nome");
          return value ? value.toLowerCase() : value;
        },
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const value = this.getDataValue("email");
          return value ? value.toLowerCase() : value;
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Email inválido",
          },
        },
      },
      senha: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM("user", "funcionario"),
        allowNull: false,
      },
      ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      telefone: DataTypes.STRING,
      cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
      data_nascimento: { type: DataTypes.DATEONLY, allowNull: false },
      endereco: {
        type: DataTypes.STRING,
        get() {
          const value = this.getDataValue("endereco");
          return value ? value.toLowerCase() : value;
        },
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },

    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
          role: "user",
        },
      },
      scopes: {
        ativo: {
          where: {},
        },
        funcionarios: {
          where: {
            role: "funcionario",
          },
        },
      },
    }
  );
  return Usuario;
};
