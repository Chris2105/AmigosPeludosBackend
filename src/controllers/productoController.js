const Producto = require('../models/Producto');

// Crear un producto
exports.crearProducto = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json({ mensaje: 'Producto creado exitosamente', producto: nuevoProducto });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al crear el producto', error: error.message });
    }
};

// Obtener todos los productos
exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al obtener los productos', error: error.message });
    }
};

// Actualizar un producto
exports.actualizarProducto = async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ mensaje: 'Producto actualizado exitosamente', producto: productoActualizado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al actualizar el producto', error: error.message });
    }
};

// Eliminar un producto
exports.eliminarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Producto eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Hubo un error al eliminar el producto', error: error.message });
    }
};
