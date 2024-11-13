const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importar la configuración de la base de datos
const User = require('./user');
const Horario = require('./horario');

// Definir el modelo de Reservation
const Reservation = sequelize.define('Reservation', {
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',      // referencia al modelo User
            key: 'id'         // clave primaria de la tabla User
        }
    },
    idHorario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'horarios',   // referencia al modelo Horario
            key: 'id'         // clave primaria de la tabla Horario
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    tableName: 'reservations', // Especificar el nombre de la tabla en la base de datos
    timestamps: false // Cambia a true si necesitas createdAt y updatedAt
});


// Exportar el modelo
module.exports = Reservation;
