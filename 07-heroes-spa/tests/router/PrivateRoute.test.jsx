import {render, screen} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en <PrivateRoute />', () => {
  test('debe de mostrar el children si está autenticado', () => {
    // Sobreescribir la implementación
    Storage.prototype.setItem = jest.fn();
    
    const contextValue = {
      logged: true,
      user: {
        name: 'Alfonso',
        id: 'ABC321'
      }
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  });
});