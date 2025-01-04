const { Op } = require("sequelize");
const CamposVazios = require("../erro/CamposVazios.js");
const ErroValidacao = require("../erro/ErroValidacao.js");
const NaoEncontrado = require("../erro/NaoEncontrado.js");
const filtro = require("../helpers/filtro.js");

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAllRegisters(req, res, next) {
    try {
      const listarRegistros = await this.entidadeService.getAll(req, res);
      console.log(listarRegistros.dataValues);
      return res.status(200).json(listarRegistros);
    } catch (erro) {
      next(new NaoEncontrado());
    }
  }

  async filterRegisters(req, res, next) {
    filtro(req.query.valor, req.query);
    try {
      const listarRegistros = await this.entidadeService.filterProduct(filtro);

      if (!listarRegistros) {
        return res.status(404).json({ mensagem: "registro nao encontrado" });
      }

      return res.status(200).json(listarRegistros);
    } catch (erro) {
      next(erro);
    }
  }

  async createRegisters(req, res, next) {
    const dadosParaCriacao = req.body;

    try {
      const novoRegistroCriado = await this.entidadeService.create(
        dadosParaCriacao
      );
      return res.status(201).json(novoRegistroCriado);
    } catch (erro) {
      console.log(erro);

      next(erro);
    }
  }

  async updateRegisters(req, res, next) {
    const { id } = req.params;
    const dadosParaAtualizacao = req.body;
    try {
      const isUpdate = await this.entidadeService.update(
        dadosParaAtualizacao,
        Number(id)
      );

      if (isUpdate) {
        return res
          .status(200)
          .json({ mensagem: "registro atualizado com sucesso" });
      }
      return res.status(404).json({ mensagem: "registro nao foi atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  async daleteRegisters(req, res, next) {
    const { id } = req.params;
    try {
      await this.entidadeService.delete(Number(id));
      return res
        .status(200)
        .json({ mensagem: "registro excluido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  }
}

module.exports = Controller;
