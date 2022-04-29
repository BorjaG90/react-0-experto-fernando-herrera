import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';

describe('pruebas en <RealExampleRef />', () => { 
  const wrapper = shallow(<RealExampleRef />);

  test('should mostrarse correctamente', () => { 
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('should de mostrar el componente <MultipleCustomHook />', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
})