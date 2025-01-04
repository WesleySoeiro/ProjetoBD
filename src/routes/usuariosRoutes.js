const routes = require("express").Router();
const UsuariosController = require("../controllers/UsuariosController.js");
const usuariosController = new UsuariosController();
const FuncionariosController = require("../controllers/FuncionariosController.js");
const funcionariosController = new FuncionariosController();

routes
  .get("/usuarios", (req, res, next) =>
    usuariosController.getAllRegisters(req, res, next)
  )
  .get("/usuarios/all", (req, res, next) =>
    usuariosController.getRegistersByScope(req, res, next)
  )
  .get("/usuarios/funcionarios", (req, res, next) =>
    funcionariosController.getRegisters(req, res, next)
  )
  .get("/usuarios/funcionarios/all", (req, res, next) =>
    funcionariosController.getRegistersByScope(req, res, next)
  )

  .get("/usuarios/buscar", (req, res, next) =>
    usuariosController.filterRegisters(req, res, next)
  )
  .post("/usuarios", (req, res, next) =>
    usuariosController.createRegisters(req, res, next)
  )
  .post("/usuarios/:usuario_id/funcionarios", (req, res, next) =>
    funcionariosController.createRegisters(req, res, next)
  )

  .put("/usuarios/:id", (req, res, next) =>
    usuariosController.updateRegisters(req, res, next)
  )
  .put("/usuarios/:id/funcionarios", (req, res, next) =>
    funcionariosController.updateRegisters(req, res, next)
  )

  .delete("/usuarios/:id", (req, res, next) =>
    usuariosController.daleteRegisters(req, res, next)
  )
  .delete("/usuarios/:id/funcionarios", (req, res, next) =>
    funcionariosController.daleteRegisters(req, res, next)
  );

module.exports = routes;
