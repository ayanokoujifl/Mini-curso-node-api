const {Sequelize} = require('sequelize')

const conexao= new Sequelize(
    'nodeCurso',
    'root',
    '12345',
    {
        "host":"localhost",
        "dialect":"mysql"
    }
);

module.exports=conexao