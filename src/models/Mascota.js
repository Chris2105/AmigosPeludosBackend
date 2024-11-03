const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    raza: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Mascota', mascotaSchema);
