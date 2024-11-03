const express = require('express');
const router = express.Router();
const mascotaController = require('../controllers/mascotaController');

router.get('/', mascotaController.obtenerMascotas);

router.get('/buscar', mascotaController.buscarMascotaPorNombre);

router.post('/', mascotaController.crearMascota);

module.exports = router;
