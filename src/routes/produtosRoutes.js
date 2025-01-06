const routes = require("express").Router();
const ProdutosController = require("../controllers/ProdutosController.js");
const paginar = require("../middlewares/paginar.js");

const produtosController = new ProdutosController();

routes
  .get(
    "/produtos",
    async (req, res, next) =>
      await produtosController.getAllRegisters(req, res, next),
    paginar
  )
  .get(
    "/produtos/buscar",
    async (req, res, next) =>
      await produtosController.filterRegisters(req, res, next),
    paginar
  )
  .post(
    "/produtos",
    async (req, res, next) =>
      await produtosController.createRegisters(req, res, next),
    paginar
  )
  .put(
    "/produtos/:id",
    async (req, res, next) =>
      await produtosController.updateRegisters(req, res, next),
    paginar
  )
  .delete(
    "/produtos/:id",
    async (req, res, next) =>
      await produtosController.daleteRegisters(req, res, next),
    paginar
  );

module.exports = routes;
