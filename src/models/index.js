const Cursos = require("./Cursos");
const Professores = require("./Professores");
const Alunos = require("./Alunos");
const CursosAlunos = require("./CursosAlunos");

// relacionar um para muitos
Professores.hasMany(Cursos, {
    foreignKey: "professores_id",
});

// relacionar muitos para muitos; com uma associcao intermediaria
Alunos.belongsToMany(Cursos, { 
    foreignKey: "alunos_id",
    through: CursosAlunos,
});

Cursos.belongsToMany(Alunos, {
    foreignKey: "cursos_id",
    through: CursosAlunos,
});

module.exports = {
    Cursos,
    Professores,
    Alunos,
    CursosAlunos
}