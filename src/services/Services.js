const { where } = require("sequelize");
const dataSource = require("../database/models");
const NaoEncontrado = require("../erro/NaoEncontrado.js");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll(req, res, next) {
    const resultado = await dataSource[this.model].findAll();
    req.resultado = resultado;
    next();
  }

  async getScope(scope, filtros, req, res, next) {
    const resultado = dataSource[this.model].scope(scope).findAll(filtros);
    req.resultado = resultado;
    next();
  }

  async filterProduct(filtros, req, res, next) {
    const resultado = await dataSource[this.model].findOne({
      where: filtros,
    });
    if (resultado) {
      req.resultado = resultado.toJSON();
      next();
    }
    next(new NaoEncontrado("Registro não encontrado."));
  }

  async create(dadosParaCriacao, req, res, next) {
    return dataSource[this.model].create(dadosParaCriacao);
  }

  async update(novosDados, id, req, res, next) {
    const listaAtualizada = await dataSource[this.model]
      .unscoped()
      .update(novosDados, {
        where: { id: id },
      });

    if (listaAtualizada[0] === 0) {
      return false;
    }
    return true;
  }

  async delete(id) {
    await dataSource[this.model]
      .unscoped()
      .update({ ativo: false }, { where: { id } });
    return dataSource[this.model].unscoped().destroy({
      where: { id: id },
    });
  }
}

module.exports = Services;
