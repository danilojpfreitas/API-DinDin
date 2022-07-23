const express = require('express');
const cursosController = require('../controller/cursosController');
const professoresController = require('../controller/professoresController');
const alunosController = require('../controller/alunosController');
const usuariosController = require('../controller/usuariosController');

// add middlewar de validacao de usuario
const usuarioCreateValidation = require("../validations/usuarios/create")

const routes = express.Router();

// rotas cursos

routes.get("/cursos", cursosController.listarCursos);

routes.post("/cursos", cursosController.cadastrarCursos);

routes.delete("/cursos/:id", cursosController.deletarCursos);

// rotas professores

routes.get("/professores", professoresController.listarProfessores);

routes.post("/professores", professoresController.cadastrarProfessores);

routes.delete("/professores/:id", professoresController.deletarProfessores);

// rotas alunos

routes.get("/alunos", alunosController.listarAlunos);

routes.post("/alunos", alunosController.cadastrarAlunos);

// add rota de usuarios

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);

// add rota do login

// routes.post('/login', authController.login);


module.exports = routes;