const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que apunta a tu configuración de base de datos

// Definir el modelo de Sala
const Sala = sequelize.define('Sala', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidadAsientos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0 // Asegura que cantidadAsientos no sea negativo
        }
    }
}, {
    tableName: 'salas', // Especificar el nombre de la tabla en la base de datos
    timestamps: false // Cambia a true si necesitas createdAt y updatedAt
});

module.exports = Sala;
