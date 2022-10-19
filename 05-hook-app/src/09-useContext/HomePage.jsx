import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const {user} = useContext(UserContext);
  return (
    <>
      <h2>HomePage <small>{user?.name}</small></h2>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  )
}
