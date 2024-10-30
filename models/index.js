const sequelize = require('../config/database');
const User = require('./user');
const Sala = require('./sala');
const Movie = require('./movie');
const Category = require('./category');

// Definir relaciones
// Ejemplo: Movie.belongsTo(Category);
// Category.hasMany(Movie);

// Exportar todos los modelos y sequelize
module.exports = {
    sequelize,
    User,
    Sala,
    Movie,
    Category,
};
