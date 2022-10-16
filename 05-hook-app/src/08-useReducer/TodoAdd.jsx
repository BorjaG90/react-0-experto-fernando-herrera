import { useForm } from '../hooks/useForm';

export const TodoAdd = ({onNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const onSubmit = (event) => {
    event.preventDefault();

    if(description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    };

    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="btn btn-outline-primary"
      >Agregar</button>
    </form>
  )
}
