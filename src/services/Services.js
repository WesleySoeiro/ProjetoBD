const { where } = require("sequelize");
const dataSource = require("../database/models");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async getScope(scope, filtros) {
    return dataSource[this.model].scope(scope).findAll(filtros);
  }

  async filterProduct(filtros) {
    return dataSource[this.model].findOne({
      where: filtros,
    });
  }

  async create(dadosParaCriacao) {
    return dataSource[this.model].create(dadosParaCriacao);
  }

  async update(novosDados, id) {
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
