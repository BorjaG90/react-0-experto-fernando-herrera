// Functional Components
import React from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {
  if (!saludo) {
    throw new Error('El saludo es necesario');
  }
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </>
  );
}

// Definicion de las props del componente
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;