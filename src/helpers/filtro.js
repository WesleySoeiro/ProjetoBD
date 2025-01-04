function filtro(preco, query) {
  let filtro = {};
  preco = Number(query.preco) || null;
  if (preco !== null) {
    filtro.preco = preco;
  }

  if (Object.keys(query).length === 0) {
    return next(new CamposVazios());
  }

  for (const [key, value] of Object.entries(query)) {
    if (key !== "preco") {
      if (value.trim() === "") {
        return next(new CamposVazios());
      }
      filtro[key] = { [Op.iLike]: `%${value}%` };
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
    }
  }
  return filtro;
}

module.exports = {
  filtro,
};
