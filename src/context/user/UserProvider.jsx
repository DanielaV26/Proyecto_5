/* eslint-disable react/prop-types */
import { useReducer } from "react"
import { UserContext } from "./userContext"
import userReducer from "./userReducer"

const initialState = {
  token: null
}

const initialize = () =>{
  const  tokenLS = localStorage.getItem("token")
  const token = JSON.parse(tokenLS)
  if(tokenLS){
return {token}
  }
  return {
    token: null
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState, initialize)

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  )
}
