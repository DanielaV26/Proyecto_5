import { Input } from "@nextui-org/react"
import { LockIcon } from "../components/LockIcon"
import { MailIcon } from "../components/MailIcon"
import { ShippingBoxSvg } from "../components/ShippingBoxSvg"
import { ShoppingBagSvg } from "../components/ShoppingBagSvg"
import { ReceiptSvg } from "../components/ReceiptSvg"
import { useContext, useEffect, useState } from "react"
import { saveToLS } from "../helpers/LS"
import { UserContext } from "../context/user/userContext"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { PaymentContext } from "../context/payment/paymentContext"

export const CheckoutUserForm = () => {
    const navegar = useNavigate()
 

    const initialLoginForm = {
        email: "",
        password: ""
    }
    const [loginFormData, setLoginFormData] = useState(initialLoginForm)
    const [state, dispatch] = useContext(UserContext)
    const [paymentState, paymentDispatch] = useContext(PaymentContext)

    const isLogged = () => {
        if(state.token) {
            navegar("/checkout/delivery")
        }
    }

    const onSubmitLoginForm = async (e) => {
        e.preventDefault()
        const rutaBackend = 'https://proyecto5-backend-17i4e1gbz-ninalizbeth.vercel.app/'

    try {
      const {data} = await axios.post(rutaBackend+'user/login', loginFormData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      })
      console.log(data)
      saveToLS('token', data.token)
      dispatch({
        type: 'LOGIN',
        payload: data.token
      })
      alert("inicio de sesión exitoso")
      navegar("/checkout/delivery")
      setLoginFormData(initialLoginForm)
    } catch (error) {
      console.log(error)
      alert("Usuario o contraseña incorrectos")
    }
    }

    const onChangeLoginForm = (e) => {
        setLoginFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
      paymentDispatch({
        type: 'CHANGE STEP',
        payload: 1
      })
      isLogged()
    }, [])
    

    return (
        <section className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
            <form onSubmit={onSubmitLoginForm} className="flex flex-col p-4 bg-white border drop-shadow-sm w-full gap-4 rounded-xl">
                <h3 className="font-semibold text-lg">Inicia sesión</h3>
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
                    name='email'
                    value={loginFormData.email}
                    onChange={onChangeLoginForm}
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
                    name='password'
                    value={loginFormData.password}
                    onChange={onChangeLoginForm}
                />
                <a className="cursor-pointer underline ml-auto text-violet-500">Olvidé mi contraseña</a>
                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full p-2 font-semibold cursor-pointer" type="submit">
                    Iniciar sesión
                </button>
            </form>

            <form className="flex flex-col p-4 bg-white w-full gap-4 rounded-xl border drop-shadow-sm">
                <h3 className="font-semibold text-lg">Crea tu cuenta</h3>
                <p>Con tu registro, accedes a la información de tus compras y obtienes múltiples beneficios.</p>
                <ul className="italic flex flex-col">
                    <li className="flex gap-2"><ShippingBoxSvg/> Conoce el estado de todas tus compras</li>
                    <li className="flex gap-2"><ShoppingBagSvg/> Pide cambios, devoluciones y reembolsos.</li>
                    <li className="flex gap-2"><ReceiptSvg/> Descarga tus boletas y mucho más.</li>
                </ul>
                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full p-2 font-semibold cursor-pointer" type="submit">Crear mi cuenta </button>
                <hr />
                <p>También puedes <a className="underline cursor-pointer text-violet-500">comprar sin registro</a></p>
            </form>
        </section>
    )
}


