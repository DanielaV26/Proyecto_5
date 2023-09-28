/* eslint-disable react/prop-types */

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { useContext } from "react"
import {Link} from  "react-router-dom"
import { CartContext } from "../context/cart/cartContext"


export const ProductCard = ({ titulo, precio, imagen, id }) => {

  const [state,dispatch] = useContext(CartContext)

  const thisItem = state.cartItems.find((item) => item._id === id)
  const isInCart = state.cartItems.some((item) => item._id===id)
  const incrementar = () => {
    const newQty = state.cartItems.map( (item) => { /* Estamos creando un nuevo arreglo con el metodo (map) */
      if(item._id === id){ /* Evaluamos si es que coninciden el item que estamos iterando con el producto de esta pagina */
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
        payload: id
      })
      return
    }
      const newQty = state.cartItems.map( (item) => {
        if(item._id === id){
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
  
    return (
        <>
            
          <Card as={Link} isFooterBlurred to={`/producto/${id}`} className="w-full h-[300px] md:w-3/12 ">
    <CardHeader 
    className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-slate-900 to-transparent">
      <p className="text-white/90 uppercasefont-bold">{titulo}</p>
    
    </CardHeader>
    <Image
      removeWrapper
      alt={titulo}
      className="z-0 w-full h-full object-cover"
      src={imagen}
    />
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      
      <div className="flex flex-grow gap-2 items-center flex-col">
        
        <div className="flex flex-col  ">
          <p className=" text-slate-300 font-bold">${precio}</p>
          
        </div>
        <div className="flex gap-3">
     {
      (isInCart)
      ?<div className="bg-slate-100 rounded-3xl mt-8 flex justify-between w-full sm:w-36 items-center"><button onClick={decrementar} className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold rounded-full p-1 w-12 text-2xl text-center align-middle pb-2">-</button><span className="p-2 font-bold">{thisItem.cantidad}</span><button onClick={incrementar} className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold  rounded-full p-1 w-12 text-2xl text-center align-middle pb-2">+</button></div>
      : <Button className="bg-violet-400" radius="full" size="sm">Agregar al carrito</Button>
     }
      
      <Button className="bg-violet-400  " radius="full" size="sm">Comprar</Button>
      </div>
      </div>
    </CardFooter>
  </Card>

        </>
    )
}
