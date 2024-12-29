const CamposVazios = require("./CamposVazios.js");

class ErroValidacao extends CamposVazios {
    constructor(mensagem = "Erro de validacao, confira os campos inseridos na pesquisa.", statusCode = 400) {
        super(mensagem, statusCode);
}
}

module.exports = ErroValidacao;