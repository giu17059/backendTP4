const express = require('express');
const router = express.Router();
const Category = require('../models/category'); // Importa el modelo de categoría
const { createCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categoryControllers');


// Ruta para obtener todas las categorías
router.get('/', getCategories);

// Ruta para crear una nueva categoría
router.post('/', createCategory);

// Ruta para obtener una categoría por ID
router.get('/:id', getCategory);

// Ruta para actualizar una categoría
router.put('/:id', updateCategory);

// Ruta para eliminar una categoría
router.delete('/:id', deleteCategory);

module.exports = router;
