import { Badge } from "@nextui-org/react"
import { CartIcon } from "./CartIcon"
import { useContext } from "react"
import { CartContext } from "../context/cart/cartContext"


export const CarritoBadge = () => {
const [state, dispatch] = useContext(CartContext)
//const cantidadDeProductos = state.cartItems.length
//console.log(cantidadDeProductos)
const openModal = () => {
  dispatch({type:'OPEN'})
  console.log('abrir carrito')
}

//se ocupa el método reduce para contar la cantidad de productos en la medalla del carrito, indepentiende del tipo de producto.
const cantidadDeProductos = state.cartItems.reduce ((acumulador, valorActual)=> { /* En cada iteracion el acumulador va acumulando el valor */
  return acumulador + valorActual.cantidad
}, 0  /* 0 es el valor inicial que tiene el acumulador */
)

  return (
    <>
    <Badge  color="danger" content={cantidadDeProductos} shape="circle">
          <CartIcon className="cursor-pointer" onClick={openModal} size={30} />
        </Badge></>
  )
}
