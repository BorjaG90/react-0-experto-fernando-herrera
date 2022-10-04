import { useState } from "react"

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue)
  return {
    counter
  }
}