// controllers/salaController.js
const Sala  = require('../models/sala');

exports.getSalas = async (req, res) => {
    try {
        const salas = await Sala.findAll();
        if (!salas.length) {
            return res.status(404).json({ message: 'No hay salas disponibles.' });
        }
        res.status(200).json(salas);
    } catch (error) {
        console.error('Error al obtener las salas:', error);
        res.status(500).json({ error: 'Error al obtener salas', details: error.message });
    }
};

exports.createSala = async (req, res) => {
    const { nombre, cantidadAsientos } = req.body;
    try {
        const nuevaSala = await Sala.create({ nombre, cantidadAsientos });
        res.status(201).json(nuevaSala);
    } catch (error) {
        console.error('Error al crear la sala:', error);
        res.status(500).json({ error: 'Error al crear sala', details: error.message });
    }
};

exports.sala = async (req, res) => {
    try {
        const sala = await Sala.findByPk(req.params.id);
        if (!sala) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.json(sala);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
