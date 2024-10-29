const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importar la configuración de la base de datos

// Definir el modelo de usuario
const Reservation = sequelize.define('Reservation', {
    idUser:{
        type: DataTypes.INTEGER,
        primaryKey:true,
    },
    idHorario: {
        type: DataTypes.INTEGER,
        primaryKey:true,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    }
});

// Exportar el modelo
module.exports = User;