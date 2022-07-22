const {Alunos} = require("../models");

const alunosController = {
    async listarAlunos(req, res){

        const listaDeAlunos = await Alunos.findAll()

        res.status(200).json(listaDeAlunos)
    },
    async cadastrarAlunos (req, res){
        const {nome} = req.body;

        const novoAluno = await Alunos.create({
            nome
        });

        res.status(201).json(novoAluno);
    }
}

module.exports = alunosController