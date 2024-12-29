const express = require("express");
const produtos = require("./produtosRoutes.js");
const manipuladorNaoEncontrado = require("../middlewares/manipuladorNaoEncontrado.js");
const manipuladorDeErros = require("../middlewares/manipuladorDeErros.js");

module.exports = (app) => {
  app.route("/").get((req, res) => res.send("API Funcionando!"));
  app.use(express.json(), produtos, manipuladorNaoEncontrado, manipuladorDeErros);
};
