const Services = require("./Services.js");

class UsuariosServices extends Services {
  constructor() {
    super("Usuario");
  }

  async getClient(id) {
    super.getClient(id);
  }

  async getScope(req, res, next) {
    const results = await super.getScope("ativo");
    req.resultado = results;
    next();
  }
}

module.exports = UsuariosServices;
