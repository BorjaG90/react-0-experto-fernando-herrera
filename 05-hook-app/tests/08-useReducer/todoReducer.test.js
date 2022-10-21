import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {
  const initialState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }];

  test('should de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('should de agregar un todo', () => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false
      }
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('should de eliminar un todo', () => {
    const action = {
      type: '[TODO] Remove ToDo',
      payload: 1
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test('should de realizar el toggle del todo', () => {
    const action = {
      type: '[TODO] Toggle ToDo',
      payload: 1
    };
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});