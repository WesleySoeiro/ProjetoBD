const express = require("express");
const dbConnect = require("./config/config.js");

(async () => {
  try {
    const conexao = await dbConnect();
    console.log("Conectado com sucesso");
  } catch (error) {
    console.log(error);
  }
})();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Bem vindo a API!",
  });
});

module.exports = app;
