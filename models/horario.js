const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 


const Horario = sequelize.define('Horario', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idPelicula: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idSala: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = Horario;