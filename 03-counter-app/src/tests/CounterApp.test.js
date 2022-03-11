import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'; 

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  test('debe de mostrar el <CounterApp /> correctamente', () => {
    const wrapper = shallow( <CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(
      <CounterApp value={100} />
    );
    const counterText = parseInt(wrapper.find('h2').text().trim());

    expect(counterText).toBe(100);
  });
});
