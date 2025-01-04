const Controller = require("./Controller.js");
const CargosServices = require("../services/CargosService.js");

const cargosServices = new CargosServices();

class CargosController extends Controller {
  constructor() {
    super(cargosServices);
  }
}

module.exports = CargosController;
