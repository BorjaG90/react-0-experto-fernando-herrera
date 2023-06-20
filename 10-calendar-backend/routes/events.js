/*
  Rutas de Eventos
  host + /api/events
*/

const {Router} = require('express');
const {check} = require('express-validator');
const {fieldValidate} = require('../middlewares/field-validator');
const {jwtValidate} = require('../middlewares/jwt-validator');
const {getEvents, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Todas tienen que pasar por la validacióndel JWT
router.use(jwtValidate);

// Obtener eventos
router.get('/', getEvents);

// Crear un nuevo evento
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de fin es obligatoria').custom(isDate),
    fieldValidate
  ],
  createEvent
);

// Actualizar evento
router.put('/:id', updateEvent);

// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;