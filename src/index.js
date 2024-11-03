require('dotenv').config();
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Importar rutas
const clienteRoutes = require('./routes/clienteRoutes');
const citaRoutes = require('./routes/citaRoutes');
const productoRoutes = require('./routes/productoRoutes');
const mascotaRoutes = require('./routes/mascotaRoutes');

// Crear el servidor
const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
conectarDB();
app.use(cors());
app.use(express.json({ extended: true }));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Amigos Peludos conectado a la web');
});

// Usar las rutas
app.use('/api/clientes', clienteRoutes);
app.use('/api/citas', citaRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/mascotas', mascotaRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
