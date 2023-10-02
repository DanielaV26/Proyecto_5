import { Input } from "@nextui-org/react"
import { MailIcon } from "../components/MailIcon"
import { LockIcon } from "../components/LockIcon"
import { CartSvg } from "../components/CartSvg"
import { useContext } from "react"
import { CartContext } from "../context/cart/cartContext"
import { CartItem } from "../components/CartItem"

export const Checkout = () => {
const [state, /* dispatch */] = useContext(CartContext);
const subtotal = state.cartItems.reduce((acumulador, valorActual) => { /* la funcion reduce toma dos argumentos (acumulador y valor actual) acuculador es la funcion que reduce y valor actual la que da el valor inical. En cada iteracion el acumulador  va tomando el valor que acumula */
        return acumulador + (valorActual.valor * valorActual.cantidad);
    }, 0);

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

    <main className="mt-5 flex flex-row sm:flex sm:flex-col">
      <section className="flex gap-4">
        <form className="flex flex-col p-4 bg-white border drop-shadow-sm w-full gap-4 rounded-xl">
            <h3 className="font-semibold font-montserrat text-lg">Inicia sesión</h3>
            <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Ingresa tu email"
                  variant="bordered"
                  style={{
                    outline: 'none',
                    border: 'none'
                  }}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  variant="bordered"
                  className="outline-none focus:border-none focus:outline-none"
                  style={{
                    outline: 'none',
                    border: 'none'
                  }}
                />
        <a className="cursor-pointer underline ml-auto font-montserrat text-violet-500">Olvidé mi contraseña</a>
        <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full p-2 font-semibold cursor-pointer font-montserrat" type="submit">
            Iniciar sesión
        </button>
        </form>

        <form className="flex flex-col p-4 bg-white w-full gap-4 rounded-xl border drop-shadow-sm">
        <h3 className="font-semibold font-montserrat text-lg">Crea tu cuenta</h3>
        <p className="font-montserrat">Con tu registro, accedes a la información de tus compras y obtienes múltiples beneficios.</p>
        <ul className="font-montserrat">
        <li>Conoce el estado de todas tus compras</li>
        <li>Pide cambios, devoluciones y reembolsos.</li>
        <li>Descarga tus boletas y mucho más.</li>
        </ul>
        <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full p-2 font-semibold cursor-pointer font-montserrat" type="submit">Crear mi cuenta </button>
        <hr />
        <p className="font-montserrat">También puedes <a className="underline cursor-pointer text-violet-500">comprar sin registro</a></p>
        </form>
      </section>


      <section className="flex flex-col gap-4 p-4">
        <article className="font-montserrat bg-white rounded-xl border drop-shadow-sm p-4 flex flex-col gap-2">
          <div className="flex items-center">
        <CartSvg/>
        <h3 className="font-montserrat text-lg font-semibold">Tu carro (1 productos) <a className=" underline cursor-pointer text-violet-500 font-normal">Editar</a></h3>
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
    </>
  )
}



