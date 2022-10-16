export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case '[TODO] Add ToDo':
      return [...initialState, action.payload]
      
      default:
      return initialState;
  }
}