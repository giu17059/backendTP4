const Movie  = require('../models/movie'); 

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
    exports.obtenerMovie= async (req, res) => {
        try{
            const movies = await Movie.findAll();

            res.status(200).json(movies);            
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al obtener peliculas'})
        }
    };


