const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importar la configuración de la base de datos

// Definir el modelo de usuario
const Reservation = sequelize.define('Reservation', {
    idUser:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    idHorario: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

// Exportar el modelo
module.exports = Reservation;