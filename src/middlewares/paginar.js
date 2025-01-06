const NaoEncontrado = require("../erro/NaoEncontrado.js");

async function paginar(req, res, next) {
  try {
    let { limite = 2, pagina = 1, ordenacao = "id:-1" } = req.query;
    let [campoOrdenacao, ordem] = ordenacao.split(":");
    ordem = ordem === "1" ? "ASC" : "DESC";

    if (isNaN(Number(limite)) || isNaN(Number(pagina))) {
      res.status(400).json({ mensagem: "Os valores devem ser um numéricos" });
    }

    if (limite < 1 || pagina < 1) {
      return res.status(400).json({
        mensagem: "Os valores de limite e pagina devem ser maiores que 0",
      });
    }

    Object.entries(req.query).forEach(([chave, valor]) => {
      if (!chave || valor.trim() === "") {
        return res.status(400).send("Parametros inválidos.");
      }
    });

    const resultado = req.resultado;

    if (!resultado || resultado.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum registro encontrado." });
    }

    if (resultado.length > 1) {
      const resultOrdenado = resultado.sort((a, b) => {
        if (ordem === "ASC") {
          return a[campoOrdenacao] - b[campoOrdenacao];
        }
        if (ordem === "DESC") {
          return b[campoOrdenacao] - a[campoOrdenacao];
        }
      });

      const resultPginado = resultOrdenado.slice(
        (pagina - 1) * limite,
        pagina * limite
      );

      if (resultPginado.length === 0) {
        return res
          .status(404)
          .json({ mensagem: "fim dos registros encontrado." });
      }

      return res.status(200).json(resultPginado);
    }
    return res.status(200).json(resultado);
  } catch (erro) {
    console.log(erro.message);
    next(erro);
  }
}

module.exports = paginar;
