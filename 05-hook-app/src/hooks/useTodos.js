import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const handleNewTodo = (newTodo) => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: newTodo
    };

    dispatch(action);
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove ToDo',
      payload: id
    });
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle ToDo',
      payload: id
    });
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}