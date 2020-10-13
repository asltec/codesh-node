const Sequelize = require('sequelize');
const sequelize = new Sequelize('w0tquekpgs8zj8bs', 'bvacztegvm2lncjv', 'kmb6fa6z72y538aw', {
    host: 'wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
});

sequelize.authenticate().then(() =>{
    console.log("Conectado com sucesso");
}).catch((erro) => {
    console.log("Falha ao se conectar", erro);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.product = require('../models/Products')(sequelize, Sequelize);


module.exports = db;

