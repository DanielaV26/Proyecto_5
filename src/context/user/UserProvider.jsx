import { useReducer } from "react"
import { UserContext } from "./userContext"
import userReducer from "./userReducer"

const initialState = {
  token: null
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}
