const routes = require("express").Router();
const CargosController = require("../controllers/CargosController.js");

const cargosController = new CargosController();

routes
  .get("/cargos", (req, res, next) =>
    cargosController.getAllRegisters(req, res, next)
  )
  .get("/cargos/buscar", (req, res, next) =>
    cargosController.filterRegisters(req, res, next)
  )
  .post("/cargos", (req, res, next) =>
    cargosController.createRegisters(req, res, next)
  )
  .put("/cargos/:id", (req, res, next) =>
    cargosController.updateRegisters(req, res, next)
  )
  .delete("/cargos/:id", (req, res, next) =>
    cargosController.daleteRegisters(req, res, next)
  );

module.exports = routes;
