/* eslint-disable react/prop-types */

import { useContext } from "react"

import { CartContext } from "../context/cart/cartContext"


export const ProductCard = ({producto }) => {

  const [state,dispatch] = useContext(CartContext)

  const thisItem = state.cartItems.find((item) => item._id === producto._id)
  const isInCart = state.cartItems.some((item) => item._id===producto._id)
  const incrementar = () => {
    const newQty = state.cartItems.map( (item) => { /* Estamos creando un nuevo arreglo con el metodo (map) */
      if(item._id === producto._id){ /* Evaluamos si es que coninciden el item que estamos iterando con el producto de esta pagina */
       item.cantidad = item.cantidad + 1  /* Si es que cinciden se le suma uno */
       return item /* retornamos el item con la cantidad sumada */
      } else { /* Si no coincide lo deja igual */
        return item
      }
    })
    dispatch({ /* Burrito */
      type: 'ADD QTY', /* instrucción  de sumar 1*/
      payload: newQty /* el paquete */
    })
  }
  
  const decrementar = () => {
    if (thisItem.cantidad <= 1){
      dispatch({
        type: 'REMOVE', /*instruccion de quitar un producto del carrito*/
        payload: producto._id
      })
      return
    }
      const newQty = state.cartItems.map( (item) => {
        if(item._id === producto._id){
         item.cantidad = item.cantidad - 1
         return item
        } else {
          return item
        }
      })
      dispatch({
      type: 'SUBTRACT QTY',
      payload: newQty
      })
  }

  const addCart = (event) =>{
    event.preventDefault()
    dispatch({
      type: 'ADD',
      payload: {...producto, cantidad:1}
    })
   
  }
  
    return (
        <>

        
<div className="w-full max-w-sm bg-white border mt-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="h-60 w-full object-cover  rounded-t-lg" src={producto.imagenes.principal} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{producto.nombre}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${producto.valor}</span>
            {
              (isInCart)
              ?<div className="bg-slate-100 rounded-3xl mt-8 flex justify-between w-full sm:w-36 items-center"><button onClick={decrementar} className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold rounded-full p-1 w-12 text-2xl text-center align-middle pb-2">-</button><span className="p-2 font-bold">{thisItem.cantidad}</span><button onClick={incrementar} className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold  rounded-full p-1 w-12 text-2xl text-center align-middle pb-2">+</button></div>
               : <button onClick={addCart} className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
               }
            
        </div>
    </div>
</div>

            
         

        </>
    )
}
