import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'; 

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => { 
  // test('debe de mostrar el mensaje "Hola, soy Borja"', ()=>{
  //   const saludo = "Hola, soy Borja";
  //   // const wrapper = render(<PrimeraApp saludo={saludo} />);
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);

  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('debe de mostrar el <PrimeraApp /> correctamente', () => {
    const saludo = "Hola, soy Borja";
    const wrapper = shallow( <PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el subtitulo mostrado por props', () => {
    const saludo = "Hola, soy Borja";
    const subtitulo = "Soy un subtitulo"
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find('p').text();

    expect(textoParrafo).toBe(subtitulo);
  });
});