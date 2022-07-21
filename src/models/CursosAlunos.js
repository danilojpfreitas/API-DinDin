// importando o banco de dados
const db = require("../database");
// importando o sequelize, desestruturando
const { DataTypes } = require("sequelize");
const Cursos = require("./Cursos");
const Alunos = require("./Alunos");

// construcao de nosso modelo do banco de dados
const CursosAlunos = db.define(
    "CursosAlunos",
    {
        cursos_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Cursos,
                key: "id",
            },
        },
        alunos_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Alunos,
                key: "id",
            },
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
);

module.exports = CursosAlunos