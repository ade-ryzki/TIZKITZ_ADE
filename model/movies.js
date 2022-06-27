const { DataTypes } = require("sequelize");
const { dataBase } = require("../config/db");


const Movie = dataBase.define('Movie', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    cover: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    releaseDate: {
        type: 'TIMESTAMP',
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    cats: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    categories: {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
})

module.exports = Movie