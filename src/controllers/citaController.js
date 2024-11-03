const Cita = require('../models/Cita');

// Crear una cita
exports.crearCita = async (req, res) => {
    try {
        const nuevaCita = new Cita(req.body);
        await nuevaCita.save();
        res.status(201).json({ mensaje: 'Cita programada exitosamente', cita: nuevaCita });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al programar la cita', error: error.message });
    }
};

// Obtener todas las citas
exports.obtenerCitas = async (req, res) => {
    try {
        const citas = await Cita.find().populate('cliente mascota', 'nombre email telefono');
        res.json(citas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener las citas', error: error.message });
    }
};

// Actualizar una cita
exports.actualizarCita = async (req, res) => {
    try {
        const citaActualizada = await Cita.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ mensaje: 'Cita actualizada exitosamente', cita: citaActualizada });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al actualizar la cita', error: error.message });
    }
};

// Eliminar una cita
exports.eliminarCita = async (req, res) => {
    try {
        await Cita.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Cita eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al eliminar la cita', error: error.message });
    }
};
