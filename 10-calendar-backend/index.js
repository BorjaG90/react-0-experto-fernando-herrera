const express = require('express');
require('dotenv').config();

// Crear el servidor
const app = express();

// Directorio público
app.use(express.static('public'));

// Rutas
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});