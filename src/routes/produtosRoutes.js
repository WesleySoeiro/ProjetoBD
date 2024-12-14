const routes = require("express").Router();
const ProdutosController = require("../controllers/ProdutosController.js");

const produtosController = new ProdutosController();

routes
  .get("/produtos", (req, res) => produtosController.getAllProducts(req, res))
  .get("/produtos/:id", (req, res) =>
    produtosController.filterProducts(req, res)
  )
  .post("/produtos", (req, res) => produtosController.createProduct(req, res))
  .put("/produtos/:id", (req, res) =>
    produtosController.updateProduct(req, res)
  )
  .delete("/produtos/:id", (req, res) =>
    produtosController.daleteProduct(req, res)
  );

module.exports = routes;
