const Controller = require("./Controller.js");
const FuncionariosServices = require("../services/FuncionariosService.js");

const funcionariosServices = new FuncionariosServices();

class FuncionariosController extends Controller {
  constructor() {
    super(funcionariosServices);
  }

  async getRegisters(req, res, next) {
    try {
      const results = await funcionariosServices.getEmployee(req, res, next);
      return res.status(200).json(results);
    } catch (erro) {
      next(erro);
    }
  }

  async getRegistersByScope(req, res, next) {
    try {
      const results = await funcionariosServices.getScope(req, res, next);
    } catch (erro) {
      console.log(erro);

      next(erro);
    }
  }
}

module.exports = FuncionariosController;
