const newMessage = {
  message: 'Hola Mundo',
  title: 'Fernando'
};

/* Si no hay una dependencia con el 
comportamiento interno del componente,
es mejor sacar las funciones fuera del componente
(en este caso FirstApp)
*/
const getResult = (a,b) => {
  return a + b
}

export const FirstApp = () => {
  return (
    <>
      <h2>{newMessage.title}</h2>
      {/* <code>{ JSON.stringify(newMessage) }</code> */}
      <h3>Soy un subtítulo</h3>
      <h3>{ getResult(3,5) }</h3>
    </>
  )
}
