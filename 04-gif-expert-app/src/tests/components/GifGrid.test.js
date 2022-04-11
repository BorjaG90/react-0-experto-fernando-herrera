import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';

import {GifGrid} from '../../components/GifGrid';
import {useFetchGifs} from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs'); // Simula los resultados de useFetchGifs

describe('Pruebas en <GifGrid />', () => { 
  let wrapper;
  const category = 'One Punch';

  test('debe de mostrarse correctamente', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    
    wrapper = shallow( <GifGrid category={category}/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => { 
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier.jpg',
      title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: true
    });
    
    wrapper = shallow( <GifGrid category={category}/>);
    
    expect(wrapper).toMatchSnapshot();
   })
 })