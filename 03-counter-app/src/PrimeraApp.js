// Functional Components
import React from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo}) => {
  if (!saludo) {
    throw new Error('El saludo es necesario');
  }
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicación</p>
    </>
  );
}

// Definicion de las props del componente
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default PrimeraApp;