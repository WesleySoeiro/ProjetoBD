class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAllProducts(req, res) {
    const listarRegistros = await this.entidadeService.getAll(req, res);
    return res.status(200).json(listarRegistros);
  }

  async filterProducts(req, res) {
    const { id } = req.params;
    try {
      const listarRegistros = await this.entidadeService.filterProduct(
        Number(id)
      );
      return res.status(200).json(listarRegistros);
    } catch (erro) {
      console.log(erro);
    }
  }

  async createProduct(req, res) {
    const { id } = req.params;
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.create(
        dadosParaCriacao
      );
      return res.status(201).json(novoRegistroCriado);
    } catch (erro) {
      console.log(erro);
    }
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const dadosParaAtualizacao = req.body;
    try {
      const isUpdate = await this.entidadeService.update(
        dadosParaAtualizacao,
        id
      );

      if (isUpdate) {
        res.status(200).json({ mensagem: "registro atualizado com sucesso" });
      }
      res.status(404).json({ mensagem: "registro nao foi atualizado" });
    } catch (erro) {
      console.log(erro);
    }
  }

  async daleteProduct(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.delete(Number(id));
      return res
        .status(200)
        .json({ mensagem: "registro excluido com sucesso" });
    } catch (erro) {
      console.log(erro);
    }
  }
}

module.exports = Controller;
