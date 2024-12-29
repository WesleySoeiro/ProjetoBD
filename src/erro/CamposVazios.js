const ErroBase = require("../erro/ErroBase.js");

class CamposVazios extends ErroBase {
    constructor(mensagem = "Os campos nao podem estar vazio", statusCode = 400) {
        super(mensagem, statusCode);
    }
}

module.exports = CamposVazios;