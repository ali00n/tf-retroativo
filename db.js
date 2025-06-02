const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'postgres', // ou 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com banco de dados realizada com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco:', err);
  });

module.exports = sequelize;
