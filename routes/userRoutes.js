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

module.exports = router;
