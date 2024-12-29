const ErroBase = require("../erro/ErroBase.js");
const CamposVazios = require("../erro/CamposVazios.js");

class NaoEncontrado extends ErroBase {
    constructor(message = "Página não encontrada", statusCode = 404) {
        super(message, statusCode);
    }
}

module.exports = NaoEncontrado;