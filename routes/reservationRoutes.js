const express = require('express');
const router = express.Router();
const { getAllReservations, createReservation, getReservation, updateReservation, deleteReservation } = require('../controllers/reservationControllers');

// Ruta para obtener todas las reservas
router.get('/', getAllReservations); 

// Ruta para crear una nueva reserva
router.post('/', createReservation); // Asegúrate de que esta línea exista y esté correcta

// Ruta para obtener una reserva por ID
router.get('/:idUser/:idHorario', getReservation);

// Ruta para actualizar una reserva
router.put('/:idUser/:idHorario', updateReservation);

// Ruta para eliminar una reserva
router.delete('/:idUser/:idHorario', deleteReservation);

module.exports = router;
