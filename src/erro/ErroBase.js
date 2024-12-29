class ErroBase extends Error {
    constructor(message = "Erro Interno no Servidor", statusCode = 500) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    };

    sendRes (res) {
        res.status(this.statusCode).json({ messagem: this.message });
    }
};

module.exports = ErroBase;