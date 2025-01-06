const Services = require("./Services.js");
const { Funcionario, Usuario, Cargo, cargo_id } = require("../database/models");
const { where } = require("sequelize");

class FuncionariosServices extends Services {
  constructor() {
    super("Funcionario");
  }

  async getEmployee() {
    const results = await Funcionario.findAll({
      include: [
        {
          model: Usuario.scope("funcionarios"),
          as: "usuarioId",
          attributes: ["nome"],
        },
        {
          model: Cargo,
          as: "cargoId",
          attributes: ["nome"],
        },
      ],
    });

    const funcionario = results.map((func) => {
      const resposta = func.toJSON();
      return {
        id: resposta.id,
        usuario_id: resposta.usuarioId["nome"],
        cargo_id: resposta.cargoId["nome"],
        matricula: resposta.matricula,
      };
    });

    req.resultado = funcionario;
    next();
  }

  async getScope() {
    const results = await super.getScope("ativo", {
      include: [
        {
          model: Usuario,
          as: "usuarioId",
          attributes: ["nome"],
        },
        {
          model: Cargo,
          as: "cargoId",
          attributes: ["nome"],
        },
      ],
    });
    const respostas = results.map((func) => {
      const resposta = func.toJSON();
      return {
        id: resposta.id,
        usuario_id: resposta.usuarioId["nome"],
        cargo_id: resposta.cargoId["nome"],
        matricula: resposta.matricula,
      };
    });

    req.resultado = respostas;
    next();
  }
}

module.exports = FuncionariosServices;
