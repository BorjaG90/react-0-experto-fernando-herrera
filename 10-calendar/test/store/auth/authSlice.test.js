import { authSlice, clearErrorMessage, onLogin, onLogout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState } from "../../fixtures/authStates";
import { testUserCredentials } from "../../fixtures/testUser";

describe('Pruebas en authSlice', () => {
  test('debe de regresar el estado por defecto', () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test('debe de realizar un login', () => {
    const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
    expect(state).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined
    });
  });

  test('debe de realizar el logout', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined
    });
  });

  test('debe de realizar el logout con mensaje', () => {
    const errorMessage = 'Credenciales no válidas';
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: errorMessage
    });
  });

  test('debe de limpiar el mensaje de error', () => {
    const errorMessage = 'Credenciales no válidas';
    let state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    state = authSlice.reducer(state, clearErrorMessage());
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined
    });
  });
});