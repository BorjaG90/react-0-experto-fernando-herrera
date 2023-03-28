import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from '../../fixtures/authFixtures';

describe('Pruebas en authSlice', () => {
  test('debe de devolver el estado inicial y llamarse "auth"', () => {
    expect(authSlice.name).toBe('auth');
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test('debe de realizar la autenticación', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual(authenticatedState);
  });

  test('debe de realizar el logout sin argumentos', () => {
    const state = authSlice.reducer(initialState, logout());
    expect(state).toEqual(notAuthenticatedState);
  });

  test('debe de realizar el logouty mostrar un mensaje de error', () => {
    const errorMessage = 'Credenciales no correctas';
    const state = authSlice.reducer(initialState, logout(errorMessage));
    expect(state).toEqual({
      ...notAuthenticatedState,
      errorMessage: errorMessage
    });
  });

  test('debe de cambiar el estado a checking', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe('checking');
  });
});