const Controller = require("./Controller.js");
const UsuariosServices = require("../services/UsuariosService.js");

const usuariosServices = new UsuariosServices();

class UsuariosController extends Controller {
  constructor() {
    super(usuariosServices);
  }

  async getRegistersByScope(req, res, next) {
    try {
      const results = await usuariosServices.getScope(req, res, next);
    } catch (erro) {
      console.log(erro);

      next(erro);
    }
  }
}

module.exports = UsuariosController;
