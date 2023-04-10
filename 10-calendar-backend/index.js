const express = require('express');

// Crear el servidor
const app = express();

// Rutas
app.get('/', (req, res) => {
  res.json({
    ok: true
  });
});

// Escuchar peticiones
app.listen(4001, () => {
  console.log(`Servidor corriendo en puerto ${4001}`);
});