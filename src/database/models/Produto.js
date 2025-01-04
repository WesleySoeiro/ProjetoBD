"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    static associate(models) {
      Produto.hasMany(models.Venda, {
        foreignKey: "id_produto",
      });
    }
  }
  Produto.init(
    {
      nome: {
        type: DataTypes.STRING,
        set(value) {
          const lowerCaseValue = value ? value.toLowerCase() : value;
          this.setDataValue("nome", lowerCaseValue);
        },
        allowNull: false,
      },
      fabricante: {
        type: DataTypes.STRING,
        set(value) {
          const lowerCaseValue = value ? value.toLowerCase() : value;
          this.setDataValue("fabricante", lowerCaseValue);
        },
        allowNull: false,
      },
      preco_unitario: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: "Preco unitario não pode ser nulo" },
        },
      },
      preco_total: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Quantidade não pode ser nula" },
        },
      },
      data_entrada: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {
      sequelize,
      modelName: "Produto",
      tableName: "produtos",
      hooks: {
        beforeSave: (produto, options) => {
          console.log(produto.dataValues);

          if (produto.preco_unitario && produto.quantidade) {
            produto.preco_total = produto.preco_unitario * produto.quantidade;
          }
        },
      },
    }
  );
  return Produto;
};
