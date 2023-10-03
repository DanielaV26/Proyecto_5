import { CartSvg } from "../components/CartSvg"
import { useContext } from "react"
import { CartContext } from "../context/cart/cartContext"
import {} from "../"
import { CartItem } from "../components/CartItem"
import { Outlet } from "react-router-dom"


export const Checkout = () => {
  const [paymentState] = useContext(PaymentContext)
  const [state, /* dispatch */] = useContext(CartContext);
  const subtotal = state.cartItems.reduce((acumulador, valorActual) => { /* la funcion reduce toma dos argumentos (acumulador y valor actual) acuculador es la funcion que reduce y valor actual la que da el valor inical. En cada iteracion el acumulador  va tomando el valor que acumula */
    return acumulador + (valorActual.valor * valorActual.cantidad);
  }, 0);

  const cantidadDeProductos = state.cartItems.reduce((acumulador, valorActual) => { /* En cada iteracion el acumulador va acumulando el valor */
    return acumulador + valorActual.cantidad
  }, 0  /* 0 es el valor inicial que tiene el acumulador */
  )

  return (

    <>
      <header className="flex justify-around w-full">
        <div className="flex flex-col justify-center items-center">
          <span className="bg-fuchsia-500 p-2 rounded-full w-10 text-center font-bold text-white">1
          </span>
          <p className="font-semibold font-montserrat">Datos Personales</p></div>

        <div className="flex flex-col justify-center items-center">
          <span className="bg-gray-400 p-2 rounded-full w-10 text-center font-bold text-white">2</span>
          <p className="font-semibold font-montserrat">Tipo de Entrega</p></div>

        <div className="flex flex-col justify-center items-center">
          <span className="bg-gray-400 p-2 rounded-full w-10 text-center font-bold text-white">3</span>
          <p className="font-semibold font-montserrat">Pago</p></div>
      </header>

      <main className="mt-5 flex lg:flex-row  flex-col justify-center gap-5 items-start">
        <div className="md:min-w-3/4 w-full ">
          <Outlet />
        </div>

        <section className="flex flex-col gap-4 w-full md:w-auto">
          <article className="font-montserrat bg-white rounded-xl border drop-shadow-sm p-4 flex flex-col gap-2">
            <div className="flex items-center">
              <CartSvg />
              <h3 className="font-montserrat text-lg font-semibold">Tu carro ({cantidadDeProductos}) <a className=" underline cursor-pointer text-violet-500 font-normal">Editar</a></h3>
            </div>
            <hr />
            {state.cartItems.map((item, index) => (
              <CartItem imagen={item.imagenes.principal} nombre={item.nombre} valor={item.valor} categoria={item.categoria} id={item._id} qty={item.cantidad} key={index} />
            ))}
          </article>


          <article className="font-montserrat rounded-xl border drop-shadow-sm p-4 flex flex-col gap-2">
            <div>
              <h3 className="text-lg font-semibold">Resumen de tu compra</h3>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p>Costo de tus productos:</p>
              <span>${subtotal}</span>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
              <p>Costo de retiro en tienda:</p>
              <span className=" font-semibold  rounded-xl text-sm uppercase bg-green-100 text-green-500 p-1">gratis</span>
            </div>
            <hr />
            <div className="font-semibold flex flex-row justify-between">
              <p>Total</p>
              <span>${subtotal}</span>

            </div>
          </article>
        </section>

      </main>
      <hr className="my-8" />
    </>
  )
}



