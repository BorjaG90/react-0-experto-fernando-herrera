// Functional Components
import React from "react";

const PrimeraApp = () => {
  const saludo = 'Hola Mundo';
  const perfil = { nombre: 'Borja', edad: 31 };
  return (
    <>
      <h1>{saludo}</h1>
      <pre>{ JSON.stringify(perfil, null, 3)}</pre>
      <p>Mi primera aplicación</p>
    </>
  );
}

export default PrimeraApp;