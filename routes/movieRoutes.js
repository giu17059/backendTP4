const express = require('express');
const router = express.Router();
const { crearMovie, obtenerMovie ,obtenerMovies, updateMovie, deleteMovie} = require('../controllers/movieControllers');

// Ruta para crear una nueva película
router.post('/', crearMovie);

// Ruta para obtener todas las películas
router.get('/', obtenerMovies);

// Ruta para obtener una película por ID
router.get('/:id', obtenerMovie);

// Ruta para actualizar una película
router.put('/:id', updateMovie);

// Ruta para eliminar una película
router.delete('/:id', deleteMovie);

module.exports = router;