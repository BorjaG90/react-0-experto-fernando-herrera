/*
  Rutas de Eventos
  host + /api/events
*/

const {Router} = require('express');
const {jwtValidate} = require('../middlewares/jwt-validator');
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events')

const router = Router();

// Todas tienen que pasar por la validacióndel JWT
router.use(jwtValidate);

// Obtener eventos
router.get('/', getEvents);

// Crear un nuevo evento
router.post('/', createEvent);

// Actualizar evento
router.put('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;