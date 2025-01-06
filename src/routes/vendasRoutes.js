const routes = require("express").Router();
const VendaController = require("../controllers/VendasController.js");
const paginar = require("../middlewares/paginar.js");
const vendasController = new VendaController();

routes
  .get(
    "/vendas",
    async (req, res, next) =>
      await vendasController.getAllSales(req, res, next),
    paginar
  )

  .get(
    "/vendas/buscar",
    async (req, res, next) =>
      await vendasController.filterRegisters(req, res, next),
    paginar
  )

  .post(
    "/vendas",
    async (req, res, next) =>
      await vendasController.createRegisters(req, res, next),
    paginar
  )

  .put(
    "/vendas/:id",
    async (req, res, next) =>
      await vendasController.updateRegisters(req, res, next),
    paginar
  )

  .delete(
    "/vendas/:id",
    async (req, res, next) =>
      await vendasController.daleteRegisters(req, res, next),
    paginar
  );

module.exports = routes;
