const sequelize = require('../config/database');
const User = require('./user');
const Sala = require('./sala');
const Movie = require('./movie');
const Category = require('./category');
const Reservation = require('./reservation');
const Horario = require('./horario');
const Author = require('./author');


Movie.belongsTo(Category, { foreignKey: 'idCategoria' });//listo
Category.hasMany(Movie, { foreignKey: 'idCategoria' });//listo

Movie.belongsTo(Author, { foreignKey: 'idAutor' });//listo
Author.hasMany(Movie, { foreignKey: 'idAutor' });//listo

Horario.belongsTo(Movie, { foreignKey: 'idPelicula' });//listo
Movie.hasMany(Horario, { foreignKey: 'idPelicula' });//listo

Horario.belongsTo(Sala, { foreignKey: 'idSala' });//listo
Sala.hasMany(Horario,{foreignKey: 'idSala'} );//listo

Reservation.belongsTo(User, { foreignKey: 'idUser' });//listo
User.hasMany(Reservation, { foreignKey: 'idUser' });//listo

Reservation.belongsTo(Horario, { foreignKey: 'idHorario' });//listo
Horario.hasMany(Reservation, { foreignKey: 'idHorario' });//listo

//Reservation.belongsTo(Movie, { foreignKey: 'movieId', targetKey: 'id' });
//Movie.hasMany(Reservation, { foreignKey: 'movieId', sourceKey: 'id' });

module.exports = {
    sequelize,
    Horario,
    User,
    Sala,
    Movie,
    Category,
    Reservation,
};
