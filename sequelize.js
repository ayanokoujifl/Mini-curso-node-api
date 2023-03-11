const { Sequelize } = require('sequelize')

const conexao = new Sequelize('nodeCurso', 'root', 'luis7180', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = conexao
