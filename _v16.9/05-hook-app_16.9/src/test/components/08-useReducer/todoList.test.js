import React from "react";
import { shallow } from "enzyme";
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas sobre <TodoList />', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de tener varios <TodoItem />', () => {
    expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);
    // expect(typeof wrapper.find('TodoItem').at(0).prop('handleDelete'))
    //  .toBe("function");
    expect(wrapper.find('TodoItem').at(0).prop('handleDelete'))
      .toEqual(expect.any(Function));
  });


})