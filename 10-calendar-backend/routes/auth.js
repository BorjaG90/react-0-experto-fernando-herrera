/*
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const { fieldValidate } = require('../middlewares/field-validator');
const {createUser, loginUser, renewToken} = require('../controllers/auth');
const { jwtValidate } = require('../middlewares/jwt-validator')

const router = Router();

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres')
    .isLength({min: 6}),
    fieldValidate
  ],
  loginUser
);

router.post(
  '/new',
  [ // middlewares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres')
      .isLength({min: 6}),
    fieldValidate
  ],
  createUser
);

router.get('/renew', jwtValidate, renewToken);

module.exports = router;