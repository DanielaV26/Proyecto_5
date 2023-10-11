import {PayPalButtons} from "@paypal/react-paypal-js";


export const PayPalButton = () => {
  return (
            // <PayPalButtons style={{ layout: "horizontal" }} />
            <div className="flex justify-center">
            <PayPalButtons />
            </div>
  )
}

