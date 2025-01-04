const routes = require("express").Router();
const ProdutosController = require("../controllers/ProdutosController.js");

const produtosController = new ProdutosController();

routes
  .get("/produtos", (req, res, next) =>
    produtosController.getAllRegisters(req, res, next)
  )
  .get("/produtos/buscar", (req, res, next) =>
    produtosController.filterRegisters(req, res, next)
  )
  .post("/produtos", (req, res, next) =>
    produtosController.createRegisters(req, res, next)
  )
  .put("/produtos/:id", (req, res, next) =>
    produtosController.updateRegisters(req, res, next)
  )
  .delete("/produtos/:id", (req, res, next) =>
    produtosController.daleteRegisters(req, res, next)
  );

module.exports = routes;
