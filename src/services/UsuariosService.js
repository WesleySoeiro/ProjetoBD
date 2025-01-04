const Services = require("./Services.js");

class UsuariosServices extends Services {
  constructor() {
    super("Usuario");
  }

  async getClient(id) {
    super.getClient(id);
  }

  async getScope() {
    const results = await super.getScope("ativo");
    return results;
  }
}

module.exports = UsuariosServices;
