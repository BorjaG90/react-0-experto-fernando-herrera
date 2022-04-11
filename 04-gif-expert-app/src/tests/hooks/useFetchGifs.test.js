import React from 'react';
import {renderHook} from '@testing-library/react-hooks'
import {shallow} from 'enzyme';

import {useFetchGifs} from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => { 
  test('should de retornar el estado inicial', async () => { 
    // const { data, loading } = useFetchGifs( 'Dragon Ball' );
    const {result, waitForNextUpdate} = renderHook( () => useFetchGifs( 'Dragon Ball' ));
    const {data, loading} = result.current;
    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect(loading).toBeTruthy;
  });

  test('debe de retornar un arreglo de imgs y el loading en false', async () => { 
    const {result, waitForNextUpdate} = renderHook( () => 
      useFetchGifs( 'Dragon Ball' )
    );
    await waitForNextUpdate();
    const {data, loading} = result.current;

    expect( data.length ).toBe(10);
    expect(loading).toBeFalsy;
  })
 })