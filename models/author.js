const {DataType, DataTypes} = require('sequelize');
const sequelize = require('../config/database');
//const Movie = require('./movie'); 

const Author = sequelize.define('Author',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    tableName: 'authors', // Especificar el nombre de la tabla en la base de datos
    timestamps: false // Cambia a true si necesitas createdAt y updatedAt
});


module.exports = Author;