const Cursos = require("../models/Cursos");

const cursosController = {
    async listarCursos(req, res){
        
        const listaDeCursos = await Cursos.findAll()

        res.status(200).json(listaDeCursos)
    },
    async cadastrarCursos(req, res){
        const {titulo, professor, descricao} = req.body;

        const novoCurso = await Cursos.create({
            titulo,
            professor,
            descricao
        });

        res.status(201).json(novoCurso);
    },
    async deletarCursos (req, res){
        try {
        const { id } = req.params;
        const {titulo} = await Cursos.findByPk(id);

        if (!id) return res.status(400).json("Id não encontrado!")

        await Cursos.destroy({
            where:{
                id,
            },
        })

        res.status(204).json(`Curso ${titulo} foi deltado.`)
        } catch(error) {
            return res.status(500).json("Ocorreu algum problema.")
        }
    }
}

module.exports = cursosController;