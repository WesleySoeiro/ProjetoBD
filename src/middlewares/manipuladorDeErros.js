const {
  ValidationError,
  DatabaseError,
  SequelizeDatabaseError,
} = require("sequelize");

const ErroBase = require("../erro/ErroBase.js");
const ErroValidacao = require("../erro/ErroValidacao.js");

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof ValidationError) {
    return new ErroValidacao(erro.message).sendRes(res);
  } else if (erro instanceof ErroBase) {
    return erro.sendRes(res);
  } else if (
    erro.name === "SequelizeDatabaseError" &&
    erro.original.code === "22P02" &&
    erro.table === "usuarios"
  ) {
    return new ErroValidacao(
      `O campo Role aceita apenas 'user' ou 'funcionario' como valores. `
    ).sendRes(res);
  } else if (erro instanceof DatabaseError) {
    if (erro.message.includes("não existe a coluna")) {
      console.log(erro);

      return new ErroValidacao(
        "Coluna não encontrada no banco de dados"
      ).sendRes(res);
    }
  }
  return new ErroBase().sendRes(res);
}

module.exports = manipuladorDeErros;
