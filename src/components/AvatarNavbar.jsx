import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user/userContext";
import jwt_decode from "jwt-decode"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AvatarNavbar = () => {
  const [state, dispatch] = useContext(UserContext)
  const [usuario, setUsuario] = useState(null)
  const logOut = () => {
    localStorage.removeItem("token")
    dispatch({type: 'LOGOUT'})
    toast("Cerraste tu sesión")
  }
  const navigate = useNavigate()

useEffect(() => {
  if(state.token) {
    const decodedToken = jwt_decode(state.token);
    setUsuario(decodedToken)
  }
}, [state])


  return (
    <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696872936/Captura_de_pantalla_2023-10-09_143340_qknmyk.png"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Sesión iniciada como</p>
              <p className="font-semibold">{usuario?.email}</p>
            </DropdownItem>
            <DropdownItem onPress={() => navigate("/profile")} key="settings">Mi perfil</DropdownItem>
            <DropdownItem onPress={()=>navigate("/favorites")} key="team_settings">Mis favoritos</DropdownItem>
            <DropdownItem onPress={logOut} key="logout" color="danger">
              Cerrar sesión
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
  )
}
