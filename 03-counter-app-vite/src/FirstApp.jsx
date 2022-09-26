import PropTypes from 'prop-types';

const newMessage = {
  message: 'Hola Mundo',
  title: 'Borja'
};

/* Si no hay una dependencia con el 
comportamiento interno del componente,
es mejor sacar las funciones fuera del componente
(en este caso FirstApp)
*/
const getResult = (a,b) => {
  return a + b
}

export const FirstApp = ({title, subTitle, name}) => {
  return (
    <>
      <h2>{title}</h2>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      {/* <h3>Soy un subtítulo</h3> */}
      {/* <h3>{ getResult(3,5) }</h3> */}
      <h3>{subTitle}</h3>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Borja Gete',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}
