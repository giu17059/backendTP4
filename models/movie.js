const {DataType, DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category');
const Author = require('./author');
const Horario = require('./horario');

const Movie = sequelize.define('Movie',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopsis: {
        type: DataTypes.TEXT, //text es un string mas largo
        allowNull: true
    },
    imgMovie: {
        type: DataTypes.STRING,
        allowNull: true
    },

    idAutor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'authors',
            key: 'id'
        }
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'categorias', 
            key: 'id'
        }
    }
},{
    tableName: 'movies', // Especificar el nombre de la tabla en la base de datos
    timestamps: false // Cambia a true si necesitas createdAt y updatedAt
});


module.exports = Movie ;
