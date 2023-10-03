import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
// import { ProductGallery } from "../components/ProductGallery"
import {useContext} from 'react'
import { CartContext } from "../context/cart/cartContext"
import { CartSvg } from "../components/CartSvg"
import { FeaturedProducts } from "../components/FeaturedProducts"

export const ProductoPage = () => {
  const {id} = useParams() //destructuración de id. useParams lee los parámetros de la URL(todo lo que viene después del (/) )
  const [producto, setProducto] = useState({})
  
  const getProducto = async () => {
    const url = `https://proyecto5-backend-e5u3-dev.fl0.io/products/product/${id}`
    const { data } = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    setProducto(data.producto)
  }

//se utiliza para ejecutar el código dentro del él según las dependencias.
  useEffect(() => {
    getProducto()
  }, []) /* ([]) es el arreglo de dependencias del useEffect */

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
      payload: id
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

const buyNow = (event) => {
  event.preventDefault()
    if (thisItem.cantidad < 1 ){
      dispatch({
        type: 'ADD',
        payload: {...producto, cantidad:1}
      })
    }
   
    dispatch({
      type: 'OPEN',
    })
}

  const [state,dispatch] = useContext(CartContext)
//  constante thisItem  toma el valor que tiene  el item que tiene esta pag dentro del carrito, esto lo hace con el metodo (find) que compara los id y nos retorna el item.
  const thisItem = state.cartItems.find((item) => item._id === producto._id)
  
  const addCart = (event) =>{
    event.preventDefault()
    dispatch({
      type: 'ADD',
      payload: {...producto, cantidad:1}
    })
   
  }
  useEffect(() => {
    localStorage.setItem('carrito' , JSON.stringify(state.cartItems))
  
  }, [state])
  
// constante evalua con un metodo (some) de array si el producto esta o no en el carrito
  const isInCart = state.cartItems.some((item) => item._id===producto._id)

  return (
    <>
      {/* <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
--> */}
      <div className="w-full">
        <div className="pt- w-full flex flex-col lg:flex-row">


          {/* <!-- Image gallery --> */}
          <div className="mx-auto mt-6 w-full sm:px-6  lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:w-1/2">
            <div className="w-full rounded-lg">
              <img src={producto?.imagenes?.principal} alt={producto?.nombre} className="w-full rounded-xl object-cover object-center " />
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-5 sm:px-6 lg:max-w-7xl   lg:gap-x-8 lg:px-8 lg:pb-24 flex flex-col lg:w-1/2 gap-5">
            <div className=" w-full lg:pr-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl uppercase">{producto?.nombre}</h1>
            </div>

            {/* <!-- Options --> */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-4xl tracking-tight text-gray-900">${producto?.valor}</p>

              {/* <!-- Reviews --> */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <Link href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reseñas</Link>
                </div>
              </div>

              

              <div className="mt-10 flex flex-col lg:flex-row gap-5">
{
  (isInCart)
  ?<div className="bg-slate-100 rounded-3xl mt-8 flex justify-between w-full sm:w-36 items-center"><button onClick={decrementar} className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold rounded-full p-1 w-12 text-2xl text-center align-middle pb-2">-</button><span className="p-2 font-bold">{thisItem.cantidad}</span><button onClick={incrementar} className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold  rounded-full p-1 w-12 text-2xl text-center align-middle pb-2">+</button></div>
  :<button onClick={addCart }  className="flex w-full items-center justify-center rounded-md border border-indigo-700  px-8 py-3 text-base font-medium text-indigo-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Agregar al carrito</button>
}

                <button onClick={buyNow} className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  
                <CartSvg/> Comprar ahora</button>
              </div> </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className=" text-gray-900 text-xl whitespace-pre-wrap">{(producto?.descripcion)}</p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>
<FeaturedProducts categoria={producto.categoria}/>

    </>

  )
}
