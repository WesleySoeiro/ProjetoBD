const { Op } = require("sequelize");

function filtro(preco, query) {
  let filtros = {};
  preco = Number(query.preco) || null;
  if (preco !== null) {
    filtros.preco = preco;
  }

  if (Object.keys(query).length === 0) {
    return next(new CamposVazios());
  }

  for (const [key, value] of Object.entries(query)) {
    if (key !== "preco") {
      if (value.trim() === "") {
        return next(new CamposVazios());
      }
      filtros[key] = { [Op.like]: `%${value}%` };
    }
    if (key == "preco") {
      if (preco === null) {
        return next(
          new ErroValidacao(
            "O valor informado precisa ser um número. Por favor, insira um número válido.",
            400
          )
        );
      }
      filtros.preco = preco;
    }
  }
  return filtros;
}

module.exports = filtro;
