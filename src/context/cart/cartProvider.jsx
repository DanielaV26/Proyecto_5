/* eslint-disable react/prop-types */
import { useReducer } from "react"
import { CartContext } from "./cartContext"
import cartReducer from "./cartReducer"

const initialState = {
    cartItems: []
}

const initializeCart = () => {
    const carritoLS = localStorage.getItem("carrito")
    if (!carritoLS) {
        return {
            cartItems:[]
        }
    }
    const cartItems = JSON.parse(carritoLS)
    return {cartItems}
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState, initializeCart)
    return (
        <CartContext.Provider value = {[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}