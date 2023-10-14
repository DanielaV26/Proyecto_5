
import { PayPalButtons } from "@paypal/react-paypal-js"

export const PayPalButton= ({ invoice, totalValue }) => {
const approve = async (data, actions) => {
 try {
const order = await actions.order?.capture()
        }
catch (error) {
console.log(error)
        }
    }

return (


   <div className="flex justify-center">
   < PayPalButtons

            createOrder={(data, actions) => {
                return actions.order.create({ purchase_units: [{ description: invoice, 
                    amount: { 
                    value: totalValue,
                    currency_code: "USD"
                } }] })
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
