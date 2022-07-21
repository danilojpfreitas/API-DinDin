const {Professores} = require("../models");

const professoresController = {
    async listarProfessores(req, res){

        const listaDeProfessores = await Professores.findAll()

        res.status(200).json(listaDeProfessores)
    },
    async cadastrarProfessores(req, res){
        const {nome} = req.body;

        const novoProfessor = await Professores.create({
            nome
        });

        res.status(201).json(novoProfessor);
    }
}

module.exports = professoresController