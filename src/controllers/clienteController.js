const Cliente = require('../models/Cliente');
const Mascota = require('../models/Mascota');

exports.crearCliente = async (req, res) => {
    try {
        const { nombre, email, telefono, mascota } = req.body;

        let cliente = new Cliente({ nombre, email, telefono, mascota });
        await cliente.save();

        res.status(201).json({ mensaje: 'Cliente creado exitosamente', cliente });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Hubo un error', error: error.message });
    }
};

exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.actualizarCliente = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const { nombre, email, telefono, mascota } = req.body;

        // Actualiza el cliente usando su ID
        const clienteActualizado = await Cliente.findByIdAndUpdate(
            clienteId,
            { nombre, email, telefono, mascota },
            { new: true, runValidators: true }
        );

        if (!clienteActualizado) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.status(200).json({ mensaje: 'Cliente actualizado con éxito', cliente: clienteActualizado });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Hubo un error', error: error.message });
    }
};

exports.eliminarCliente = async (req, res) => {
    try {
        const clienteId = req.params.id;

        // Elimina el cliente usando su ID
        const clienteEliminado = await Cliente.findByIdAndDelete(clienteId);

        if (!clienteEliminado) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }

        res.status(200).json({ mensaje: 'Cliente eliminado con éxito' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: 'Hubo un error', error: error.message });
    }
};


exports.obtenerMascotas = async (req, res) => {
    try {
        const { clienteId } = req.params;
        const mascotas = await Mascota.find({ cliente: clienteId });
        res.json(mascotas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener las mascotas', error: error.message });
    }
};
