import {renderHook} from '@testing-library/react-hooks';
import {useCounter} from '../../hooks/useCounter';

describe('pruebas en useCounter', () => { 
  test('debe de retornar los valores por defecto', () => { 
    const {result} = renderHook(() => useCounter( ));
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
})