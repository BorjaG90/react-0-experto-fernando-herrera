import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoItem } from '../../../components/08-useReducer/TodoItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoItem />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoItem
      todo={demoTodos[0]}
      index={1}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('debe de mostrarse correctamente', () => { 
    expect(wrapper).toMatchSnapshot();
  });

  test('debe llamar a la funcion borrar', () => {
    wrapper.find('button').simulate('click');

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  });

  test('debe llamar a la funcion toggle', () => {
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
  });

  test('debe de mostrar el texto correctamente', () => {
    expect(wrapper.find('p').text())
      .toEqual(`${demoTodos[0].id +1}. ${demoTodos[0].desc}`);
  });

  test('should de tener la clase complete si el todo.done es true', () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(
      <TodoItem
        todo={todo}
        index={1}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );

    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
})