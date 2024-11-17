const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Movie  = require('./movie');
const { Sala } = require('./sala');



const Horario = sequelize.define('Horario', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true, 
        unique: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE, 
        allowNull: false
    },
    idPelicula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'movies',
            key: 'id'
        }
    },
    idSala: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'salas',
            key: 'id'
        }
    }
},{
    tableName: 'horarios', // Especificar el nombre de la tabla en la base de datos
    timestamps: false // Cambia a true si necesitas createdAt y updatedAt
});

module.exports = Horario;

Horario.belongsTo(Movie, { foreignKey: 'idPelicula' });
Movie.hasMany(Horario, { foreignKey: 'idPelicula' }); // Relación inversa
