/* eslint-disable react/prop-types */

import { PayPalButtons } from "@paypal/react-paypal-js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PaymentContext } from "../context/payment/paymentContext"
import { toast } from "react-toastify"
import { CartContext } from "../context/cart/cartContext"

export const PaypalButton = ({ invoice, totalValue }) => {
    const [, dispatch] = useContext(PaymentContext)
    const [, cartDispatch] = useContext(CartContext) 
    const navigate = useNavigate()
    const approve = async (data, actions) => {
        try {
            
            const order = await actions.order?.capture()

            cartDispatch({
type: "EMPTY",

            })
            navigate('/payment-success')
            dispatch({
                type: "SET ORDER",
                payload: order
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex justify-center">
        < PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({ purchase_units: [{ description: invoice, amount: { value: totalValue } }] })
            }}
            onApprove={approve}
            onError={(error) => {
                console.error(error)
                toast('Error al procesar el pago')
            }}
            onCancel={() => {
                toast('Pago cancelado por el usuario')
            
            }}
        />
        </div>
    )
}
