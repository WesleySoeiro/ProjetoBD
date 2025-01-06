"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendas_Produtos extends Model {
    static associate(models) {
      Vendas_Produtos.belongsTo(models.Produto, { foreignKey: "id_produto" });
      Vendas_Produtos.belongsTo(models.Venda, { foreignKey: "id_venda" });
    }
  }
  Vendas_Produtos.init(
    {
      id_venda: { type: DataTypes.INTEGER, allowNull: false },
      id_produto: { type: DataTypes.INTEGER, allowNull: false },
      quantidade_vendida: { type: DataTypes.INTEGER, allowNull: false },
      subtotal: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      sequelize,
      modelName: "Venda_Produto",
      tableName: "vendas_produtos",
      hooks: {
        afterCreate: async (vendaProduto, options) => {
          const produto = await sequelize.models.Produto.findByPk(
            vendaProduto.id_produto
          );
          if (produto) {
            produto.quantidade -= vendaProduto.quantidade_vendida;
            produto.preco_total -= vendaProduto.subtotal;
            if (produto.quantidade < 0 || produto.preco_total < 0) {
              throw new Error("Quantidade insuficiente");
            }
            await produto.save();
          }
        },
      },
    }
  );
  return Vendas_Produtos;
};
