import React from 'react';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('pruebas en todoReducer', () => { 
  test('debe de retornar el estado por defecto', () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test('debe de agregar un toDo', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Postgres',
      done: false
    };
    const action = {
      type: 'add', 
      payload: newTodo
    };
    const state = todoReducer(demoTodos, action);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('debe de borrar un toDo', () => {
    const state = todoReducer(demoTodos, {type: 'delete', payload: 1});

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test('debe de hacer el toggle del toDo', () => {
    const state = todoReducer(demoTodos, {type: 'toggle', payload: 2});

    expect(state[0]).toEqual(demoTodos[0]);
    expect(state[1].done).toBe(true);
  });
});