import React from 'react';
import {renderHook} from '@testing-library/react-hooks'
import {shallow} from 'enzyme';

import {useFetchGifs} from '../../hooks/useFetchGifs';

describe('Preubas en el hook useFetchGifs', () => { 
  test('should de retornar el estado inicial', () => { 
    // const { data, loading } = useFetchGifs( 'Dragon Ball' );
    const {result} = renderHook( () => useFetchGifs( 'Dragon Ball' ));
    const {data, loading} = result.current;

    expect( data ).toEqual([]);
    expect(loading).toBeTruthy;
   })
 })