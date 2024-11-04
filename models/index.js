const sequelize = require('../config/database');
const User = require('./user');
const Sala = require('./sala');
const Movie = require('./movie');
const Category = require('./category');
const Reservation = require('./reservation');
const Horario = require('./horario');



Movie.belongsTo(Category, { foreignKey: 'idCategoria' });
Category.hasMany(Movie, { foreignKey: 'idCategoria' });


//Movie.belongsTo(Author, { foreignKey: 'idAutor' });
//Author.hasMany(Movie, { foreignKey: 'idAutor' });


Horario.belongsTo(Movie, { foreignKey: 'idPelicula' });
Movie.hasMany(Horario, { foreignKey: 'idPelicula' });


Reservation.belongsTo(User, { foreignKey: 'idUser' });
User.hasMany(Reservation, { foreignKey: 'idUser' });

Reservation.belongsTo(Horario, { foreignKey: 'idHorario' });
Horario.hasMany(Reservation, { foreignKey: 'idHorario' });

Horario.belongsTo(Sala, { foreignKey: 'idHorario' });
Sala.hasMany(Horario,{foreignKey: 'idSala'} )



module.exports = {
    sequelize,
    Horario,
    User,
    Sala,
    Movie,
    Category,
    Reservation,
};
