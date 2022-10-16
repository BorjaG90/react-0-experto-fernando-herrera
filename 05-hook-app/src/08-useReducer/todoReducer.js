export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case '[TODO] Add ToDo':
      return [...initialState, action.payload];

    case '[TODO] Remove ToDo':
      return initialState.filter(todo => todo.id !== action.payload);

    default:
      return initialState;
  }
}