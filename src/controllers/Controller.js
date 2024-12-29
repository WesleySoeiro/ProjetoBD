const { Op } = require("sequelize");
const CamposVazios = require("../erro/CamposVazios.js");
const ErroValidacao = require("../erro/ErroValidacao.js");

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAllProducts(req, res, next) {
    const listarRegistros = await this.entidadeService.getAll(req, res);
    return res.status(200).json(listarRegistros);
  }

  async filterProducts(req, res, next) {
    let filtro = {};
    const valor = Number(req.query.valor) || null;

    if (valor !== null) {
      filtro.valor = valor;
    }

    if (Object.keys(req.query).length === 0) {
      return next(new CamposVazios());
    }

    for (const [key, value] of Object.entries(req.query)) {
      if (key !== "valor") {
        if (value.trim() === "") {
          return next(new CamposVazios());
        }
        filtro[key] = { [Op.iLike]: `%${value}%` };
      }
      if (key == "valor") {
        if (valor === null) {
          return next(
            new ErroValidacao(
              "O valor informado precisa ser um número. Por favor, insira um número válido.",
              400
            )
          );
        }
      }
    }

    try {
      const listarRegistros = await this.entidadeService.filterProduct(filtro);

      if (!listarRegistros) {
        return res.status(404).json({ mensagem: "registro nao encontrado" });
      }

      return res.status(200).json(listarRegistros);
    } catch (erro) {
      console.log(erro);
      next(erro);
    }
  }

  async createProduct(req, res, next) {
    const { id } = req.params;
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

  async updateProduct(req, res, next) {
    const { id } = req.params;
    const dadosParaAtualizacao = req.body;
    try {
      const isUpdate = await this.entidadeService.update(
        dadosParaAtualizacao,
        id
      );

      if (isUpdate) {
        res.status(200).json({ mensagem: "registro atualizado com sucesso" });
      }
      res.status(404).json({ mensagem: "registro nao foi atualizado" });
    } catch (erro) {
      console.log(erro);
      next(erro);
    }
  }

  async daleteProduct(req, res, next) {
    const { id } = req.params;
    try {
      await this.entidadeService.delete(Number(id));
      return res
        .status(200)
        .json({ mensagem: "registro excluido com sucesso" });
    } catch (erro) {
      console.log(erro);
      next(erro);
    }
  }
}

module.exports = Controller;
