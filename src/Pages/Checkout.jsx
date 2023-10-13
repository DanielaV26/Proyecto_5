import { CartSvg } from "../components/CartSvg"
import { ProgressCheckout } from "../components/ProgressCheckout"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/cart/cartContext"
import { CartItem } from "../components/CartItem"
import { Outlet } from "react-router-dom"
import { agregarPuntoAlPrecio } from "../helpers/precioConPunto"
import { PaymentContext } from "../context/payment/paymentContext"

// TE ODIO LIVESHARE
// PD: NO FUI YO

export const Checkout = () => {

  const [state, /* dispatch */] = useContext(CartContext);
  const [paymentState, ] = useContext(PaymentContext)
  const [valorEnvio, setValorEnvio] = useState(0)
  const [precioFormateado, setPrecioFormateado] = useState(0)
  console.log(paymentState)

  const subtotal = state.cartItems.reduce((acumulador, valorActual) => { /* la funcion reduce toma dos argumentos (acumulador y valor actual) acuculador es la funcion que reduce y valor actual la que da el valor inical. En cada iteracion el acumulador  va tomando el valor que acumula */
  
    return acumulador + (valorActual.valor * valorActual.cantidad);
  }, 0);

  const subtotalConPunto = agregarPuntoAlPrecio(subtotal)

  const cantidadDeProductos = state.cartItems.reduce((acumulador, valorActual) => { /* En cada iteracion el acumulador va acumulando el valor */
    return acumulador + valorActual.cantidad
  }, 0  /* 0 es el valor inicial que tiene el acumulador */
  )

  const establecerValorEnvio = () =>{
    if(paymentState.delivery === "delivery"){
      console.log(paymentState)
    setValorEnvio(4990)
    }
    else {
    setValorEnvio(0)
    }
  }
  useEffect(() => {
const formatearPrecio  = () =>{
  establecerValorEnvio()
  const total = subtotal + valorEnvio
  setPrecioFormateado(agregarPuntoAlPrecio(total))
  console.log(precioFormateado)
  console.log(valorEnvio)
}
formatearPrecio()
  
  }, [paymentState, state])

 

  return (

    <>
     <ProgressCheckout/>

      <main className="mt-20 flex lg:flex-row  flex-col justify-center gap-5 items-start">

        <div className="md:min-w-3/4 w-full ">
          <Outlet />
        </div>

        <section className="flex flex-col gap-4 w-full md:w-auto p-6">
          <article className="bg-white rounded-xl border drop-shadow-sm p-4 flex flex-col gap-2">
            <div className="flex items-center">
              <CartSvg />
              <h3 className="text-lg font-semibold">Tu carro ({cantidadDeProductos})</h3>
            </div>
            <hr />
            {state.cartItems.map((item, index) => (
              <CartItem imagen={item.imagenes.principal} nombre={item.nombre} valor={item.valor} categoria={item.categoria} id={item._id} qty={item.cantidad} key={index} />
            ))}
          </article>


          <article className="rounded-xl border drop-shadow-sm p-4 flex flex-col gap-2">
            <div>
              <h3 className="text-lg font-semibold">Resumen de tu compra</h3>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p>Costo de tus productos:</p>
              <span>${subtotalConPunto}</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              {
                (paymentState.delivery === "delivery") ? (<><p>Costo de envío:</p>
                <span className=" font-semibold  rounded-xl text-sm uppercase bg-green-100 text-green-500 p-1">$4.990</span></>) : (<><p>Costo de retiro en tienda:</p>
                <span className=" font-semibold  rounded-xl text-sm uppercase bg-green-100 text-green-500 p-1">gratis</span></>)
              }
            </div>
            <hr />
            <div className="font-semibold flex flex-row justify-between">
              <p>Total</p>
              <span>${precioFormateado}</span>

            </div>
          </article>
        </section>

      </main>
      <hr className="my-8" />
    </>
  )
}



