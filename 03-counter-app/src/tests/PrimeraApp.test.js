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
});