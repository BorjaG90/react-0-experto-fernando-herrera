/*
  Rutas de Usuarios / Auth
  host + /api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();

const {createUser, loginUser, renewToken} = require('../controllers/auth');

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres')
    .isLength({min: 6}),
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
  ],
  createUser
);

router.get('/renew', renewToken);

module.exports = router;