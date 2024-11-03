const Mascota = require('../models/Mascota');

exports.obtenerMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find();
        res.json(mascotas);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al obtener las mascotas");
    }
};

exports.crearMascota = async (req, res) => {
    try {
        const nuevaMascota = new Mascota(req.body);
        await nuevaMascota.save();
        res.status(201).json(nuevaMascota);
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear la mascota', error });
    }
};

// Función para buscar mascota por nombre
exports.buscarMascotaPorNombre = async (req, res) => {
    try {
        const nombre = req.query.nombre; 
        const mascotas = await Mascota.find({ nombre: new RegExp(nombre, 'i') });

        if (mascotas.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron mascotas con ese nombre' });
        }

        res.json(mascotas);
    } catch (error) {
        console.error('Error al buscar mascota por nombre:', error);
        res.status(500).json({ mensaje: 'Error al buscar la mascota', error: error.message });
    }
};
