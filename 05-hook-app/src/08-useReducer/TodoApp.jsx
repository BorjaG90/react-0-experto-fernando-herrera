import { useReducer } from "react"
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
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}
