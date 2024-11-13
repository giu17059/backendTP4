const Movie = require('../models/movie');
 

    exports.crearMovie = async (req, res) => {
        try {
            console.log("datos recibidos", req.body);
            const { nombre, duracion, sinopsis, imgMovie, idAutor, idCategoria} = req.body;

            const nuevaMovie = await Movie.create({
                nombre,
                duracion,
                sinopsis,
                imgMovie,
                idAutor,
                idCategoria
            });
            res.status(201).json(nuevaMovie);
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al crear Movie'})
        }
    },
    exports.obtenerMovies= async (req, res) => {
        try{
            const movies = await Movie.findAll();

            res.status(200).json(movies);            
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al obtener peliculas'})
        }
    };
    exports.obtenerMovie = async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if (!movie) {
                return res.status(404).json({ error: 'Película no encontrada.' });
            }
            res.json(movie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    exports.updateMovie = async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if (!movie) {
                return res.status(404).json({ error: 'Película no encontrada' });
            }
            const updatedMovie = await movie.update(req.body);
            res.json(updatedMovie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    exports.deleteMovie = async (req, res) => {
        try {
            const movie = await Movie.findByPk(req.params.id);
            if (!movie) {
                return res.status(404).json({ error: 'Película no encontrada' });
            }
            await movie.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };


