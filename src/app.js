const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(200).send({
    message: "Bem vindo a API!",
  });
});

module.exports = app;
