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
            model: User,      // referencia al modelo User
            key: 'id'         // clave primaria de la tabla User
        }
    },
    idHorario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Horario,   // referencia al modelo Horario
            key: 'id'         // clave primaria de la tabla Horario
        }
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


// Exportar el modelo
module.exports = Reservation;
