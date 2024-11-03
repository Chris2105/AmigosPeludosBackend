const express = require('express');
const router = express.Router();
const citaController = require('../controllers/citaController');

router.post('/', citaController.crearCita);
router.get('/', citaController.obtenerCitas);
router.put('/:id', citaController.actualizarCita);
router.delete('/:id', citaController.eliminarCita);

module.exports = router;
