import { useContext } from "react"
import { PaymentContext } from "../context/payment/paymentContext"
import { Link } from "react-router-dom"

export const PaymentSuccess = () => {

  const [state, dispatch] =useContext(PaymentContext)


  return (
    <div className="flex flex-col p-8 justify-center items-center">
     
    <div className="xl:mt-36">
    <h2 className="uppercase font-bold text-center text-3xl font-mooli bg-gradient-to-t from-violet-600 to-yellow-200 text-transparent bg-clip-text">¡gracias por tu compra!</h2>
    </div>
    <div>
        <img className="w-96  p-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1697252292/Dise%C3%B1o_sin_t%C3%ADtulo_2_xasxco.png" alt=""/>
    </div>
         <div className="border p-2 bg-violet-200 rounded-xl min-w-[400px]">
         <h3 className="font-bold text-center font-mooli">Detalles de tu compra</h3>
         <ul>
          <li className="flex justify-between font-mooli"><span>Nombre:</span><span className="">{state.personalData.name}</span></li>
          <li className="flex justify-between font-mooli"><span>Entrega:</span><span>{state.delivery}</span></li>
          <li className="flex justify-between font-mooli"><span>Valor:</span><span>{state.totalvalue}</span></li>
          <li className="flex justify-between font-mooli"><span>Número de orden:</span><span>{state.order.id}</span></li>
          <li className="flex justify-between font-mooli"><span>Fecha de compra:</span><span>{state.order.create_time}</span></li>
         </ul>
         </div>
         <p className="font-mooli p-2">Te enviaremos una copia de tu boleta a tu correo:</p> <p className="text-violet-800 pb-2">{state.personalData.email}</p>
         <Link to="/" className="font-mooli text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-110">Volver al inicio</Link>
         </div>
  )
}
