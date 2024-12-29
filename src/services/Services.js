const { where } = require("sequelize");
const dataSource = require("../database/models");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async filterProduct(filtros) {
    return dataSource[this.model].findOne({
      where: filtros,
    });
  }

  async create(id) {
    return dataSource[this.model].create(id);
  }

  async update(novosDados, id) {
    const listaAtualizada = dataSource[this.model].update(novosDados, {
      where: { id: id },
    });

    if (listaAtualizada[0] === 0) {
      return false;
    }
    return true;
  }

  async delete(id) {
    return dataSource[this.model].destroy({
      where: { id: id },
    });
  }
}

module.exports = Services;
