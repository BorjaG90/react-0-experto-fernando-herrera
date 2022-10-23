import {fireEvent, render, screen} from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext';
import { UserContext } from '../../src/09-useContext/context/UserContext';
describe('Pruebas en <LoginPage>', () => {
  test('debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); //aria-label

    expect(preTag.innerHTML).toBe('null');
  });

  test('debe de llamar al setUser cuando se hace el click', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith(
      {"email": "juan@foo.com", "id": 1, "name": "Juan"}
    );
  });
});