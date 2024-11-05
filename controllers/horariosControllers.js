const { Horario, Sala, Movie} = require('../models');

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