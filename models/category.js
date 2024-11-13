const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definir el modelo de categoría
const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    tableName: 'categorias', // Especificar el nombre de la tabla en la base de datos
    timestamps: false // Cambia a true si necesitas createdAt y updatedAt
});



module.exports = Category;
