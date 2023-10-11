/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react"

import { CartContext } from "../context/cart/cartContext"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { Image } from "@nextui-org/react"
import { agregarPuntoAlPrecio } from "../helpers/precioConPunto"


export const ProductCard = ({ producto }) => {

  const [state, dispatch] = useContext(CartContext)

  const thisItem = state.cartItems.find((item) => item._id === producto._id)
  const isInCart = state.cartItems.some((item) => item._id === producto._id)
  const incrementar = () => {
    const newQty = state.cartItems.map((item) => { /* Estamos creando un nuevo arreglo con el metodo (map) */
      if (item._id === producto._id) { /* Evaluamos si es que coninciden el item que estamos iterando con el producto de esta pagina */
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
    if (thisItem.cantidad <= 1) {
      dispatch({
        type: 'REMOVE', /*instruccion de quitar un producto del carrito*/
        payload: producto._id
      })
      return
    }
    const newQty = state.cartItems.map((item) => {
      if (item._id === producto._id) {
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

  const addCart = (event) => {
    event.preventDefault()
    dispatch({
      type: 'ADD',
      payload: { ...producto, cantidad: 1 }
    })
    toast("Producto agregado con éxito")
  
  }
  useEffect(() => {
    localStorage.setItem('carrito' , JSON.stringify(state.cartItems))
  
  }, [state])

  const precioFormateado = agregarPuntoAlPrecio(producto.valor)

  return (
    <>


      <div className=" w-full max-w-sm bg-white border mt-10 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <Image isZoomed className="aspect-square h-96" src={producto.imagenes.principal} alt="product image" />
        </a>
        <div className="px-2 pb-4">
          <a href="#">
            <h5 className="text-3xl mt-2 font-cookie text-gray-900 dark:text-white ">{producto.nombre}</h5>
          </a>
          <div className="flex items-center justify-evenly pt-2">
            <span className="text-xl font-mooli text-gray-900 dark:text-white">${precioFormateado}</span>
            {
              (isInCart)
                ? <div className="bg-slate-100 rounded-3xl mt-1 flex justify-between w-full sm:w-24 items-center font-mooli"><button onClick={decrementar} className="bg-slate-100 hover:bg-violet-600 hover:text-white hover:font-bold rounded-full p-1 w-12 text-xl text-center align-middle pb-2">-</button><span className="p-2 font-bold">{thisItem.cantidad}</span><button onClick={incrementar} className="bg-slate-100 hover:bg-violet-600 hover:text-white hover:font-bold  rounded-full p-1 w-12 text-xl text-center align-middle pb-2">+</button></div>
                : <button onClick={addCart} className="text-white font-mooli bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110">Agregar</button>
            }
            <Link to={`/producto/${producto._id}`} className="text-white font-mooli bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110">Ver más</Link>


          </div>
        </div>
      </div>




    </>
  )
}
