const express = require("express");
const routes = express.Router();
const InscritosController = require("./controllers/InscritosController");

routes.get("/inscritos", InscritosController.index);
routes.post("/inscritos", InscritosController.store);

module.exports = routes;
