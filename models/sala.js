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
        allowNull: false
    }
}, {
    tableName: 'salas', // Puedes especificar el nombre de la tabla en la base de datos si quieres
    timestamps: false // Desactiva las columnas createdAt y updatedAt si no las necesitas
});

module.exports = Sala;
