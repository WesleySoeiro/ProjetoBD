const routes = require("express").Router();
const VendaController = require("../controllers/VendasController.js");
const vendasController = new VendaController();

routes
  .get("/vendas", (req, res, next) =>
    vendasController.getAllSales(req, res, next)
  )

  .get("/vendas/buscar", (req, res, next) =>
    vendasController.filterRegisters(req, res, next)
  )

  .post("/vendas", (req, res, next) =>
    vendasController.createRegisters(req, res, next)
  )

  .put("/vendas/:id", (req, res, next) =>
    vendasController.updateRegisters(req, res, next)
  )

  .delete("/vendas/:id", (req, res, next) =>
    vendasController.daleteRegisters(req, res, next)
  );

module.exports = routes;
