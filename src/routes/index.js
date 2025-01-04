const express = require("express");
const produtos = require("./produtosRoutes.js");
const usuarios = require("./usuariosRoutes.js");
const cargos = require("./cargosRoutes.js");
const vendas = require("./vendasRoutes.js");
const manipuladorNaoEncontrado = require("../middlewares/manipuladorNaoEncontrado.js");
const manipuladorDeErros = require("../middlewares/manipuladorDeErros.js");

module.exports = (app) => {
  app.route("/").get((req, res) => res.send("API Funcionando!"));
  app.use(
    express.json(),
    produtos,
    usuarios,
    cargos,
    vendas,
    manipuladorNaoEncontrado,
    manipuladorDeErros
  );
};
