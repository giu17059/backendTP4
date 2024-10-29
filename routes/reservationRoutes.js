const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation'); // Importar el modelo de usuario
const { createUser } = require('../controllers/reservationControlers');

// Ruta para obtener todos los usuarios
router.get('/', getAllReservation);

// Ruta para crear un nuevo usuario
router.post('/', createReservation)

// Ruta para obtener un usuario por ID
router.get('/:id', getUser);

// Ruta para actualizar un usuario
router.put('/:id', updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', userController.deleteUser);

module.exports = router;
