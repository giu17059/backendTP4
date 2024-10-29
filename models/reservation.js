const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importar la configuración de la base de datos

// Definir el modelo de usuario
const Reservation = sequelize.define('Reservation', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Exportar el modelo
module.exports = User;