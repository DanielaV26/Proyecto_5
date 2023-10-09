import jwt_decode from "jwt-decode";
import { useContext } from 'react'
import { UserContext } from "../context/user/userContext";


export const UserProfile = () => {

  const [state] = useContext(UserContext)

  return (
    <>
<div>
    <div><img src="" alt="" />
    <h2>Nombre</h2>
    <p>@mail</p>
    </div>
</div>
    </>
  )
}
