const Controller = require("./Controller.js");
const VendasServices = require("../services/VendasService.js");

const vendasServices = new VendasServices();

class VendasController extends Controller {
  constructor() {
    super(vendasServices);
  }

  async getAllSales(req, res, next) {
    try {
      const sales = await vendasServices.getSales();
      return res.status(200).json(sales);
    } catch (erro) {
      console.log(erro);

      next(erro);
    }
  }
}

module.exports = VendasController;
