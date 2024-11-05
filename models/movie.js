const {DataType, DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./category');
const Author = require('./author');

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
            model: 'author',
            key: 'id'
        }
    },
    idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'category',
            key: 'id'
        }
    }
});


module.exports = Movie ;