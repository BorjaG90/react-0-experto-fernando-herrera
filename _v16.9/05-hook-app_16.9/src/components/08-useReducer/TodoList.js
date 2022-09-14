import React from 'react';
import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

export const TodoList = ({todos, handleDelete, handleToggle}) => {
  return (
    <ul className='list-group list-group-flush'>
      {
        todos.map((todo, i) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
      }
    </ul>
  )
}

TodoItem.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}
