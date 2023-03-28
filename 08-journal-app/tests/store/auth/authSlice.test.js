import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe('Pruebas en authSlice', () => {
  test('debe de devolver el estado inicial y llamarse "auth"', () => {
    // console.log(authSlice);
    expect(authSlice.name).toBe('auth');
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });
});