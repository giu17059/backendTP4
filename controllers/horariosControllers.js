//const { Horario, Sala, Movie} = require('../models');
const  Horario  = require('../models/horario');
const Sala  = require('../models/sala');
const Movie = require('../models/movie');

// Obtener todas las reservas
exports.getAllHorarios = async (req, res) => {
    try {
        const horarios = await Horario.findAll();
        res.status(200).json(horarios);
    } catch (error) {
        console.error('Error al obtener horarios:', error);
        res.status(500).json({ error: 'Error al obtener horarios' });
    }
};

exports.createHorarios = async (req, res) =>{
    const {fecha, idPelicula, idSala} = req.body;

    try{
        const pelicula = await Movie.findByPk(idPelicula)
        if (!pelicula){
            return res.status(404).json({error: "Pelicula no encontrada"});
        }
        const sala = await Sala.findByPk(idSala)
        if(!sala){
            return res.status(404).json({error: "Sala no encontrada"});
        }

        const newHorario = await Horario.create({ fecha, idPelicula, idSala });
        res.status(201).json(newHorario);

    }
    catch (error) {
        console.error('Error al crear horarios:', error);
        res.status(500).json({ error: 'Error al crear horarios' });
    }

};
exports.getHorario = async (req, res) => {
    try {
        const horario = await Horario.findByPk(req.params.id);
        if (!horario) {
            return res.status(404).json({ error: 'Horario no encontrad' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getHorariobyMovie = async (req, res) => {
    try {
        const { idMovie } = req.params;
        if (!idMovie) {
            return res.status(400).json({ error: 'Falta el idPelicula en la solicitud' });
        }
        
        const horarios = await Horario.findAll({
            where: {
               idPelicula: idMovie,
            }
        });
        if (!horarios.length) {
            return res.status(404).json({ error: 'No se encontraron horarios para esta película' });
        }
        res.json(horarios);
    } catch (error) {
        console.error('Error al obtener horarios:', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener los horarios' });
    }
};