const express = require('express');
const cursosController = require('../Controller/cursosController');
const professoresController = require('../Controller/professoresController')

const routes = express.Router();

// rotas cursos

routes.get("/cursos", cursosController.listarCursos);

routes.post("/cursos", cursosController.cadastrarCursos);

routes.delete("/cursos/:id", cursosController.deletarCursos);

// rotas professores

routes.get("/professores", professoresController.listarProfessores);

routes.post("/professores", professoresController.cadastrarProfessores);


module.exports = routes;