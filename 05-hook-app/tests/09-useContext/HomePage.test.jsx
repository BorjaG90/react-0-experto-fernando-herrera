import {render, screen} from '@testing-library/react';
import { HomePage } from '../../src/09-useContext';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage>', () => {
  const user = {
    id: 1,
    name: 'Borja',
  }

  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label

    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label

    expect(preTag.innerHTML).toEqual(JSON.stringify(user, null, 3));
  });
});