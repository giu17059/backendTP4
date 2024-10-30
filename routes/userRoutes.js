const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Importar el modelo de usuario
const { createUser, getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/userControllers');

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers);

// Ruta para crear un nuevo usuario
router.post('/', createUser)

// Ruta para obtener un usuario por ID
router.get('/:id', getUser);

// Ruta para actualizar un usuario
router.put('/:id', updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', deleteUser);

module.exports = router;
