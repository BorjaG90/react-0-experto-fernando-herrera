// Functional Components
import React from "react";

const PrimeraApp = ({saludo = "Hola mundo"}) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicación</p>
    </>
  );
}

export default PrimeraApp;