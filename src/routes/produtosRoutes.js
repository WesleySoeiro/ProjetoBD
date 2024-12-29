const routes = require("express").Router();
const ProdutosController = require("../controllers/ProdutosController.js");

const produtosController = new ProdutosController();

routes
  .get("/produtos", (req, res, next) => produtosController.getAllProducts(req, res, next))
  .get("/produtos/buscar", (req, res, next) =>
    produtosController.filterProducts(req, res, next)
  )
  .post("/produtos", (req, res, next) => produtosController.createProduct(req, res, next))
  .put("/produtos/:id", (req, res, next) =>
    produtosController.updateProduct(req, res, next)
  )
  .delete("/produtos/:id", (req, res, next) =>
    produtosController.daleteProduct(req, res, next)
  );

module.exports = routes;
