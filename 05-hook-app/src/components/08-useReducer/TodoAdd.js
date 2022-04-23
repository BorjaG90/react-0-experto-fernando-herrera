import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(description.trim().length <=1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
      <h4>Agergar ToDo</h4>
      <hr />
      <form
        className='d-grid gap-2'
        onSubmit={handleSubmit}
        >
        <input
          type="text"
          name='description'
          className='form-control'
          placeholder='Aprender...'
          autoComplete='off'
          value={description}
          onChange={handleInputChange}
          />

        <button
          type='submit'
          className="btn btn-outline-primary mt-1"
          >Agregar</button>
      </form>
    </>
  )
}
