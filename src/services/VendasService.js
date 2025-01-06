const Services = require("./Services.js");
const { Funcionario, Usuario, Venda, Produto } = require("../database/models");

class VendasServices extends Services {
  constructor() {
    super("Venda");
  }

  async getSales(req, res, next) {
    const vendas = await Venda.findAll({
      include: [
        {
          model: Funcionario,
          as: "funcionarioId",
          attributes: ["matricula"],
        },
        {
          model: Usuario,
          as: "clienteId",
          attributes: ["nome"],
        },
        {
          model: Produto,
          as: "produtoId",
          attributes: ["nome"],
        },
      ],
    });

    const vendasFormatadas = vendas.map((venda) => {
      const vendaFormatada = venda.toJSON();
      const resposta = {
        id_cliente: vendaFormatada.clienteId["nome"],
        id_funcionario: vendaFormatada.funcionarioId["matricula"],
        id_produto: vendaFormatada.produtoId["nome"],
        data_venda: vendaFormatada.data_venda,
        quantidade_vendida: vendaFormatada.quantidade_vendida,
      };
      return resposta;
    });
    req.resultado = vendasFormatadas;
    next();
  }
}

module.exports = VendasServices;
