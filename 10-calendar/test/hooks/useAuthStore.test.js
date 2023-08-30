import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useAuthStore } from '../../src/hooks/useAuthStore';
import { authSlice } from '../../src/store';
import { initialState, notAuthenticatedState } from '../fixtures/authStates';
import { testUserCredentials } from '../fixtures/testUser';

const getMockStore = ( initialState ) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
    },
    preloadedState: {
      auth: { ...initialState }
    }
  });
};

describe('Pruebas en el useAuthStore', () => {
  test('debe de regresar los valores por defecto', () => {
    const mockStore = getMockStore({ ...initialState });
    const { result } = renderHook( () => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    } );

    expect(result.current).toEqual({
      errorMessage: undefined,
      status: 'checking',
      user: {},
      checkAuthToken: expect.any(Function),
      startLogin: expect.any(Function),
      startLogout: expect.any(Function),
      startRegister: expect.any(Function)
    });
  });

  test('startLogin debe de realizar el login correctamente', async() => {
    localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook( () => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    } );

    await act(async() => {
      await result.current.startLogin(testUserCredentials);
    });
    const { errorMessage, status, user } = result.current;

    expect({errorMessage, status, user}).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: 'Test', uid: expect.any(String)}
    });
    expect(localStorage.getItem('token').toEqual(expect.any(String)));
    expect(localStorage.getItem('token-init-date').toEqual(expect.any(String)));
  });

  test('startLogin debe de fallar la autenticación', async() => {
    localStorage.clear();
    const mockStore = getMockStore({ ...notAuthenticatedState });
    const { result } = renderHook( () => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    } );

    await act(async() => {
      await result.current.startLogin({email: 'fallo@google.es', password: '123456'});
    });
    const { errorMessage, status, user } = result.current;

    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('token-init-date')).toBeNull();
    expect({errorMessage, status, user}).toEqual({
      errorMessage: expect.any(String),
      status: 'not-authenticated',
      user: {}
    });
    waitFor(
      () => expect( result.current.errorMessage ).toBeUndefined()
    );
  });
});