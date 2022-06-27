const { DataTypes } = require("sequelize");
const { dataBase } = require("../config/db");


const Schedule = dataBase.define('Schedule', {
    cover : {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    place: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    dateTime: {
        type: 'TIMESTAMP',
        allowNull: false,
    },
    available: {
        type: DataTypes.STRING(150),
        allowNull: false,
    }
})

module.exports = Schedule