const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Importar el modelo de usuario

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll(); // Obtener todos los usuarios
        res.json(users); // Enviar los usuarios como respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body); // Crear un nuevo usuario
        res.status(201).json(user); // Enviar el usuario creado como respuesta
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Ruta para obtener un usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id); // Obtener usuario por ID
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para actualizar un usuario
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const updatedUser = await user.update(req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Ruta para eliminar un usuario
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        await user.destroy();
        res.status(204).send(); // Respuesta sin contenido
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
