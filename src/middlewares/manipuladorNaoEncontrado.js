const NaoEncontrado = require("../erro/NaoEncontrado.js");

function manipuladorNaoEncontrado(req, res, next) {
    const erro = new NaoEncontrado();
    next(erro);
}

module.exports = manipuladorNaoEncontrado