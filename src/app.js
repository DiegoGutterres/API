// importar o pacote express para o js
const express = require('express');

//criando uma instancia de express na variavel app
const app = express();

const dotenv = require('dotenv').config();

app.set('port', process.env.PORT);

module.exports = app;