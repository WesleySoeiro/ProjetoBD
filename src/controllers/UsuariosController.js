const Controller = require("./Controller.js");
const UsuariosServices = require("../services/UsuariosService.js");

const usuariosServices = new UsuariosServices();

class UsuariosController extends Controller {
  constructor() {
    super(usuariosServices);
  }

  async getClientRegisters(req, res, next) {
    const { id } = req.params;
    const listarRegistros = await this.entidadeService.getClient(Number(id));
    return res.status(200).json(listarRegistros);
  }

  async getRegistersByScope(req, res, next) {
    try {
      const results = await usuariosServices.getScope();
      return res.status(200).json(results);
    } catch (erro) {
      next(erro);
    }
  }
}

module.exports = UsuariosController;
