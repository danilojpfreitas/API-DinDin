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
    },
    async deletarProfessores (req, res){
        try {
        const { id } = req.params;

        if (!id) return res.status(400).json("Id não encontrado!")

        await Cursos.destroy({
            where:{
                id,
            },
        })

        res.status(204).json(`O professor foi deltado.`)
        } catch(error) {
            return res.status(500).json("Ocorreu algum problema.")
        }
    }
}

module.exports = professoresController