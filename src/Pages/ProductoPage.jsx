import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

export const ProductoPage = () => {
  const param = useParams()
  const id = param.id
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
  useEffect(() => {

    getProducto()

  }, [])

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
        <div className="pt-6 w-full flex flex-col lg:flex-row">


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

              <form className="mt-10 flex flex-col lg:flex-row gap-5">



                <button type="submit" className="flex w-full items-center justify-center rounded-md border border-indigo-700  px-8 py-3 text-base font-medium text-indigo-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Agregar al carrito</button>
                <button type="submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Comprar ahora</button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className=" text-gray-900 text-xl">{producto?.descripcion}</p>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>

    </>

  )
}
