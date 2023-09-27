import { Badge } from "@nextui-org/react"
import { CartIcon } from "./CartIcon"
import { useContext } from "react"
import { CartContext } from "../context/cart/cartContext"


export const CarritoBadge = () => {
const [state, dispatch] = useContext(CartContext)
const cantidadDeProductos = state.cartItems.length
console.log(cantidadDeProductos)
const openModal = () => {
  dispatch({type:'OPEN'})
  console.log('abrir carrito')
}

  return (
    <>
    <Badge  color="danger" content={cantidadDeProductos} shape="circle">
          <CartIcon className="cursor-pointer" onClick={openModal} size={30} />
        </Badge></>
  )
}
