const mongoose = require('mongoose');

const ClienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    mascota: {
        nombre: {
            type: String,
            required: true,
        },
        especie: {
            type: String,
            required: true,
        }
    }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
