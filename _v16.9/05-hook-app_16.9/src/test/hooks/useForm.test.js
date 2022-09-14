import {renderHook, act} from '@testing-library/react-hooks';
import {useForm} from '../../hooks/useForm';

describe('pruebas en useForm', () => { 
  const initialForm = {
    name: 'Borja',
    email: 'borjag90dev@gmail.com'
  }

  test('debe de regresar un formulario por defecto', () => { 
    const {result} = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Raúl'
        }
      });
    });

    const [values] = result.current;
    expect(values).toEqual({...initialForm, name: 'Raúl'});
  });

  test('debe de reestablecer el formulario con reset', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Raúl'
        }
      });
      reset();
    });

    const [values] = result.current;
    expect(values).toEqual(initialForm);

  });
})