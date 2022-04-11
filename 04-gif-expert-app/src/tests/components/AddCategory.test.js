import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {AddCategory} from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  const setCategories = jest.fn(); // () => {} 
  let wrapper;

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={setCategories} />);
  });

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } });
  });

  test('no debe de postear la info con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should llamar el setCategories y limpiar la caja de texto', () => { 
    const input = wrapper.find('input');
    const value = 'Valor de prueba';
    // Simular el inputChange
    input.simulate('change', { target: { value } });
    // Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    // SetCategories se debe haber llamado con una función
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    // El valor del input debe estar vacio ''
    expect(input.prop('value')).toBe('');
   })
})