const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clienteRoutes');
const sequelize = require('./config/database');

app.use(express.json());
app.use('/', clienteRoutes);

sequelize.authenticate().then(() => {
    console.log('Conectado ao banco de dados');
}).catch(err => {
    console.error('Erro ao conectar:', err);
});

module.exports = app;
