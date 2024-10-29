const express = require('express');
const router = express.Router();
const Category = require('../models/category'); // Importa el modelo de categoría

// Ruta para obtener todas las categorías
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para crear una nueva categoría
router.post('/', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para obtener una categoría por ID
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para actualizar una categoría
router.put('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        const updatedCategory = await category.update(req.body);
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para eliminar una categoría
router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        await category.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
