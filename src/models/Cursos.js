// importanto o banco de dados
const db = require("../database");
// importando o sequelize, desestruturando
const { DataTypes } = require("sequelize");
const Professores = require("./Professores");

// construcao de nosso modelo do banco de dados
const Cursos = db.define("Cursos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    professores_id: {
        type: DataTypes.INTEGER,
        references:{
            model: Professores,
            key: "id",
        },
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

module.exports = Cursos;