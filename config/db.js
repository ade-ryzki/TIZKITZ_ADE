const { Sequelize } = require('sequelize');

exports.dataBase = new Sequelize('tickitz_ade', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+07:00'
})

try {
    this.dataBase.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database:', error)
}