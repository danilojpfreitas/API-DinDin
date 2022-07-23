// ativando o express
const express = require("express");

// adicionando o middlewar de erro para o cadastro de usuario
const handleError = require('./middlewares/handleError');

// adicionando o db - sequelize
const db = require("./database");

const app = express();
app.use(express.json());

db.hasConection();

// importando de routes
const routes = require("./routes")
app.use(routes);

// verificar erros do cadastro de usuario
app.use(handleError);

// ativar um servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

// adicionar as tables no banco de dados
(async () => {

    const db = require("./database");
    await db.sync();
})();