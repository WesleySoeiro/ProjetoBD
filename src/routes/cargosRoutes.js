const routes = require("express").Router();
const CargosController = require("../controllers/CargosController.js");
const paginar = require("../middlewares/paginar.js");
const cargosController = new CargosController();

routes
  .get(
    "/cargos",
    async (req, res, next) =>
      await cargosController.getAllRegisters(req, res, next),
    paginar
  )
  .get(
    "/cargos/buscar",
    async (req, res, next) =>
      await cargosController.filterRegisters(req, res, next),
    paginar
  )
  .post(
    "/cargos",
    async (req, res, next) =>
      await cargosController.createRegisters(req, res, next),
    paginar
  )
  .put(
    "/cargos/:id",
    async (req, res, next) =>
      await cargosController.updateRegisters(req, res, next),
    paginar
  )
  .delete(
    "/cargos/:id",
    async (req, res, next) =>
      await cargosController.daleteRegisters(req, res, next),
    paginar
  );

module.exports = routes;
