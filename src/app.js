const express = require("express");
const dbConnect = require("./config/dbConnect.js");

(async () => {
  await dbConnect();
})();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Bem vindo a API!",
  });
});

module.exports = app;
