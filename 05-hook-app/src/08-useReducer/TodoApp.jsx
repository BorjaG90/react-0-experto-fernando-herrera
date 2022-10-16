import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del Alma',
    done: false
  },
  {
    id: new Date().getTime() +100,
    description: 'Recolectar el Tesseracto',
    done: false
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (newTodo) => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: newTodo
    };

    dispatch(action);
  }

  return (
    <>
      <h1>TodoApp (10), <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}
