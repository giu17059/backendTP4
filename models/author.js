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
        allowNull: false
    }
})


module.exports = Author;