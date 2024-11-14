const express = require('express');
const router = express.Router();
const { createAuthor, getAuthors, getAuthor, deleteAuthor, updateAuthor} = require('../controllers/authorControllers');

//Ruta para crear autores
router.post('/', createAuthor);

//Ruta para obtener todos los autores
router.get('/', getAuthors);

// Ruta para obtener un autor por ID
router.get('/:id', getAuthor);

// Ruta para actualizar un autor
router.put('/:id', updateAuthor);

// Ruta para eliminar un autor
router.delete('/:id', deleteAuthor);

module.exports = router;