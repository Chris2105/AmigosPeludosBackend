const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    mascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    motivo: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        enum: ['pendiente', 'completada', 'cancelada'],
        default: 'pendiente'
    }
});

module.exports = mongoose.model('Cita', CitaSchema);
