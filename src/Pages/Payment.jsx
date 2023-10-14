import { RadioGroup, useRadio, VisuallyHidden, cn } from "@nextui-org/react";

import { useContext, useEffect, useState } from "react";
import { MercadoPagoButton } from "../components/MercadoPagoButton";
import { TransferenciaButton } from "../components/TransferenciaButton";
import { PaymentContext } from "../context/payment/paymentContext";
import { Link } from "react-router-dom";
import { PaypalButton } from "../components/PaypalButton";


export const Payment = () => {
const [paymentMethod, setPaymentMethod] = useState("")
const [paymentState, paymentDispatch] = useContext(PaymentContext)



useEffect(() => {
  paymentDispatch({
    type: 'CHANGE STEP',
    payload: 3
  })
  
}, [])

  return (
    <section className="flex gap-4 flex-col w-full md:w-auto p-6">
      <form className="flex flex-col p-4 bg-white border drop-shadow-sm w-full gap-4 rounded-xl">
        <h3 className="font-semibold font-montserrat text-lg">Método de pago</h3>
        <RadioGroup onValueChange={setPaymentMethod} label="Elige tu método de pago">
          <CustomRadio  description="" value="PayPal">
            <div className="flex items-center gap-2">
            <span>PayPal</span> <img className="w-8 h-8" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696869287/paypal-logo_kflbua.png" alt="logo PayPal" />
            </div>
          </CustomRadio>
          <CustomRadio description="" value="MercadoPago">
            <div className="flex items-center gap-2">
            <span>Mercado Pago</span> <img className="w-8 h-8" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696869120/MERCADOPAGO_jbqkom.png" alt="logo mercadoPago" />
            </div>
          </CustomRadio>
          <CustomRadio description="" value="Transferencia">
            <div className="flex items-center gap-2">
            <span>Transferencia</span> <img className="w-7 h-7" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696870258/tranferencia_emxuvd.png" alt="logo transferencia" />
            </div>
          </CustomRadio>
        </RadioGroup>
        {(paymentMethod==="PayPal") && <PaypalButton invoice="hola" totalValue={paymentState.totalvalue} />}
        {(paymentMethod==="MercadoPago") && <MercadoPagoButton/>}
        {(paymentMethod==="Transferencia") && <TransferenciaButton/>}
      </form>
      <div className="flex justify-between p-5 mt-3 gap-5">
        <Link to="/checkout/delivery" className="cursor-pointer text-violet-500 underline">&larr;Volver atrás</Link>
      </div>
    </section>
  )
}

export const CustomRadio = (props) => {
  const {
    Component,
    children,
    // isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "min-w-[250px] mx-auto cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
      </div>
    </Component>
  );
};