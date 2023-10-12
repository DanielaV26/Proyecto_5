import { RadioGroup, useRadio, VisuallyHidden, cn } from "@nextui-org/react";
import { CartContext } from "../context/cart/cartContext";
import { useContext, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import { PaymentContext } from "../context/payment/paymentContext";

export const Delivery = () => {
  const [state, dispatch] = useContext(CartContext)
  const [paymentState, paymentDispatch] = useContext(PaymentContext)
  const navigate=useNavigate()
  const goToPay = (e) => {
    e.preventDefault()
    navigate("/checkout/payment")
  }

  useEffect(() => {
    paymentDispatch({
      type: 'CHANGE STEP',
      payload: 2
    })
    
  }, [])

  return (
    <section className="flex gap-4 flex-col w-full md:w-auto p-6">
      <form className="flex flex-col p-8 bg-white border drop-shadow-sm w-full gap-4 rounded-xl">
        <h3 className="font-semibold text-xl">Entrega 📦</h3>
        <RadioGroup label="Elige tu método de entrega">
          <CustomRadio description="Por $4.990" value="delivery" isSelected>
            Recibe mañana
          </CustomRadio>
          <CustomRadio description="GRATIS" value="pickup">
            Retira en tienda
          </CustomRadio>
        </RadioGroup>
      </form>
      <div className="flex justify-between p-5 mt-3 gap-5">
        <Link to="/checkout" className="cursor-pointer text-violet-500 underline">&larr;Volver atrás</Link>
        <button  onClick={goToPay} className="cursor-pointer font-semibold rounded-xl text-white text-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 grow max-w-[250px]  p-2 hover:scale-110" type="submit">Continuar con el pago</button>
      </div>
    </section>
  )
}

export const CustomRadio = (props) => {
  const {
    Component,
    children,
    isSelected,
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
        "min-w-[200px] mx-auto cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
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