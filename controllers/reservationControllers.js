const User  = require('../models/user');
const Reservation = require('../models/reservation');
const Horario  = require('../models/horario');
const Sala  = require('../models/sala');

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
    const { idUser, idHorario, cantidad }= req.body;

    try{
        const user = await User.findByPk(idUser);
        if (!user){
            return res.status(404).json({error: "Usuario no encontrado"});
        }
    
        const horario = await Horario.findByPk(idHorario);
        if(!horario){
            return res.status(404).json({error: "Horario no encontrado"});
        }

        const totalReservado = await Reservation.sum('cantidad', {
            where: { idHorario }
        });

        const asientosDisponibles = horario.idSala.cantidadAsientos - totalReservado;//VER ESTA LINEA

        if (cantidad > asientosDisponibles) {
            return res.status(400).json({
                error: `No hay suficientes asientos disponibles. Asientos disponibles: ${asientosDisponibles}`,
            })
        };

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

exports.getUserReservation = async (req, res) => {
    try{
        const {idUser} = req.params;
        const reservation = await Reservation.findAll({where: {idUser}});
        const user = await User.findByPk(idUser);
        if(!user){
            return res.status(404).json({error:'Usuario no encontrado'});
        }
        if(!reservation){
            return res.status(404).json({error:'El usuario no tiene reservas'});
        }
        res.status(200).json(reservation);
    }
    catch(error){
        console.error('Error al obtener reserva:', error);
        res.status(500).json({ error: 'Error al obtener reserva' });
    }
}

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
