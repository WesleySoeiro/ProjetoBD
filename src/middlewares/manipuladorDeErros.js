const ErroBase = require("../erro/ErroBase.js");

function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof ErroBase) {
    return erro.sendRes(res);
  }
  return new ErroBase().sendRes(res);
}

module.exports = manipuladorDeErros;
