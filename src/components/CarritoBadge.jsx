import { Badge } from "@nextui-org/react"
import { CartIcon } from "./CartIcon"
import { useContext } from "react"
import { CartContext } from "../context/cart/cartContext"


export const CarritoBadge = () => {
const [state, dispatch] = useContext(CartContext)
const cantidadDeProductos = state.cartItems.length

  return (
    <>
    <Badge color="danger" content={cantidadDeProductos} shape="circle">
          <CartIcon size={30} />
        </Badge></>
  )
}
