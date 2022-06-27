const { DataTypes } = require("sequelize");
const { dataBase } = require("../config/db");

//change table 
const Booking = dataBase.define('Booking', {
    price: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    hour: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    chair: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cinema: {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
})

module.exports = Booking