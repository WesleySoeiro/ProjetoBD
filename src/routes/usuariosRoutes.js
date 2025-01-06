const routes = require("express").Router();
const UsuariosController = require("../controllers/UsuariosController.js");
const usuariosController = new UsuariosController();
const FuncionariosController = require("../controllers/FuncionariosController.js");
const funcionariosController = new FuncionariosController();
const paginar = require("../middlewares/paginar.js");

routes
  .get(
    "/usuarios",
    async (req, res, next) =>
      await usuariosController.getAllRegisters(req, res, next),
    paginar
  )
  .get(
    "/usuarios/all",
    async (req, res, next) =>
      await usuariosController.getRegistersByScope(req, res, next),
    paginar
  )
  .get(
    "/usuarios/funcionarios",
    async (req, res, next) =>
      await funcionariosController.getRegisters(req, res, next),
    paginar
  )
  .get(
    "/usuarios/funcionarios/all",
    async (req, res, next) =>
      await funcionariosController.getRegistersByScope(req, res, next),
    paginar
  )

  .get(
    "/usuarios/buscar",
    async (req, res, next) =>
      await usuariosController.filterRegisters(req, res, next),
    paginar
  )
  .post(
    "/usuarios",
    async (req, res, next) =>
      await usuariosController.createRegisters(req, res, next),
    paginar
  )
  .post(
    "/usuarios/:usuario_id/funcionarios",
    async (req, res, next) =>
      await funcionariosController.createRegisters(req, res, next),
    paginar
  )

  .put(
    "/usuarios/:id",
    async (req, res, next) =>
      await usuariosController.updateRegisters(req, res, next),
    paginar
  )
  .put(
    "/usuarios/:id/funcionarios",
    async (req, res, next) =>
      await funcionariosController.updateRegisters(req, res, next),
    paginar
  )

  .delete(
    "/usuarios/:id",
    async (req, res, next) =>
      await usuariosController.daleteRegisters(req, res, next),
    paginar
  )
  .delete(
    "/usuarios/:id/funcionarios",
    async (req, res, next) =>
      await funcionariosController.daleteRegisters(req, res, next),
    paginar
  );

module.exports = routes;
