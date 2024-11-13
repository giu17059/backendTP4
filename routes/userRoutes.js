
const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/userControllers');

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers);

// Ruta para crear un nuevo usuario
router.post('/', createUser);

// Ruta para iniciar sesión (por email y contraseña)
router.post('/login', getUser);

// Ruta para obtener un usuario por ID
router.get('/:id', getUserById); // Asumiendo que tienes `getUserById` en los controladores

// Ruta para actualizar un usuario
router.put('/:id', updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', deleteUser);

module.exports = router;
