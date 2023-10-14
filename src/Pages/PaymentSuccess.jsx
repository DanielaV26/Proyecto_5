import { useContext } from "react"
import { PaymentContext } from "../context/payment/paymentContext"

export const PaymentSuccess = () => {

  const [state, dispatch] =useContext(PaymentContext)


  return (
    <div className="flex flex-row">
     
    <div>
    <h2 className="uppercase font-bold text-center text-3xl font-cookie bg-gradient-to-t from-violet-600 to-yellow-200 text-transparent bg-clip-text">¡gracias por tu compra!</h2>
    </div>
    <div>
        <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1697252292/Dise%C3%B1o_sin_t%C3%ADtulo_2_xasxco.png" alt=""/>

         </div>
         {
          JSON.stringify(state)
         }
         </div>
  )
}
