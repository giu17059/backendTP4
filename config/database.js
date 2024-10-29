const { Sequelize } = require('sequelize');

// Crear una nueva instancia de Sequelize para SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' // Ruta del archivo de la base de datos
});

module.exports = sequelize;
