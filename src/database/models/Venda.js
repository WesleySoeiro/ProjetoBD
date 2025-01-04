"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Venda extends Model {
    static associate(models) {
      Venda.belongsTo(models.Usuario, {
        foreignKey: "id_cliente",
        as: "clienteId",
      });
      Venda.belongsTo(models.Funcionario, {
        foreignKey: "id_funcionario",
        as: "funcionarioId",
      });
      Venda.belongsTo(models.Produto, {
        foreignKey: "id_produto",
        as: "produtoId",
      });
    }
  }
  Venda.init(
    {
      id_cliente: { type: DataTypes.INTEGER, allowNull: false },
      id_funcionario: { type: DataTypes.INTEGER, allowNull: false },
      id_produto: { type: DataTypes.INTEGER, allowNull: false },
      data_venda: { type: DataTypes.DATEONLY, allowNull: false },
      quantidade_vendida: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Venda",
      tableName: "vendas",
      hooks: {
        afterCreate: async (vendaProduto, options) => {
          const produto = await sequelize.models.Produto.findByPk(
            vendaProduto.id_produto
          );
          if (produto) {
            produto.quantidade -= vendaProduto.quantidade_vendida;
            produto.preco_total -=
              vendaProduto.quantidade_vendida * produto.preco_unitario;
            if (produto.quantidade < 0 || produto.preco_total < 0) {
              throw new Error("Quantidade insuficiente");
            }
            await produto.save();
          }
        },
      },
    }
  );
  return Venda;
};
