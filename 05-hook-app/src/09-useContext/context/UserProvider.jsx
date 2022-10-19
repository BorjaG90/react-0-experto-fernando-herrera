import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: 'Borja Gete',
  email: 'borjag90dev@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo', user}}>
      {children}
    </UserContext.Provider>
  )
}
