const Reservation = require('../models/reservation');

// Obtener todas las reservas
exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json(reservations);
    } catch (error) {
        console.error('Error al obtener reservas:', error);
        res.status(500).json({ error: 'Error al obtener reservas' });
    }
};

// Crear una nueva reserva
exports.createReservation = async (req, res) => {
    try {
        const { idUser, idHorario, cantidad } = req.body;
        const newReservation = await Reservation.create({ idUser, idHorario, cantidad });
        res.status(201).json(newReservation);
    } catch (error) {
        console.error('Error al crear reserva:', error);
        res.status(500).json({ error: 'Error al crear reserva' });
    }
};

// Obtener una reserva por ID (usando idUser y idHorario como claves compuestas)
exports.getReservation = async (req, res) => {
    try {
        const { idUser, idHorario } = req.params;
        const reservation = await Reservation.findOne({ where: { idUser, idHorario } });
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        res.status(200).json(reservation);
    } catch (error) {
        console.error('Error al obtener reserva:', error);
        res.status(500).json({ error: 'Error al obtener reserva' });
    }
};

// Actualizar una reserva
exports.updateReservation = async (req, res) => {
    try {
        const { idUser, idHorario } = req.params;
        const reservation = await Reservation.findOne({ where: { idUser, idHorario } });
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        const updatedReservation = await reservation.update(req.body);
        res.status(200).json(updatedReservation);
    } catch (error) {
        console.error('Error al actualizar reserva:', error);
        res.status(500).json({ error: 'Error al actualizar reserva' });
    }
};

// Eliminar una reserva
exports.deleteReservation = async (req, res) => {
    try {
        const { idUser, idHorario } = req.params;
        const reservation = await Reservation.findOne({ where: { idUser, idHorario } });
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        await reservation.destroy();
        res.status(204).send();
    } catch (error) {
        console.error('Error al eliminar reserva:', error);
        res.status(500).json({ error: 'Error al eliminar reserva' });
    }
};
