const express = require('express');
const cursosController = require('../Controller/cursosController');

const routes = express.Router();

routes.get("/cursos", cursosController.listarCursos);

routes.post("/cursos", cursosController.cadastrarCursos);

routes.delete("/cursos/:id", cursosController.deletarCursos);

module.exports = routes;