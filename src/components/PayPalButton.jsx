
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PaymentContext } from "../context/payment/paymentContext"

export const PaypalButton = ({ invoice, totalValue }) => {
    const [state, dispatch] = useContext(PaymentContext)
    const navigate = useNavigate()
    const approve = async (data, actions) => {
        try {
            
            const order = await actions.order?.capture()
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
                alert('Error al procesar el pago')
            }}
            onCancel={(data) => {
                alert('Pago cancelado por el usuario')
            }}
        />
        </div>
    )
}
