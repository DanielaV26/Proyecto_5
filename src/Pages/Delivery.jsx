import { RadioGroup, useRadio, VisuallyHidden, cn } from "@nextui-org/react";
import { CartContext } from "../context/cart/cartContext";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"

export const Delivery = () => {
  const [state, dispatch] = useContext(CartContext)
  const navigate=useNavigate()
  const goToPay = (e) => {
    e.preventDefault()
    navigate("/checkout/payment")
  }

  return (
    <section className="flex gap-4 flex-col w-full md:w-auto">
      <form className="flex flex-col p-4 bg-white border drop-shadow-sm w-full gap-4 rounded-xl">
        <h3 className="font-semibold font-montserrat text-lg">Entrega</h3>
        <RadioGroup label="Elige tu método de entrega">
          <CustomRadio description="Recibe en la comodidad de tu hogar" value="delivery" isSelected>
            Recibe mañana (fecha)
          </CustomRadio>
          <CustomRadio description="Retíralo desde el (fecha)" value="pickup">
            Retira en tienda
          </CustomRadio>
        </RadioGroup>
      </form>
      <div className="flex justify-between p-5 mt-3 gap-5">
        <p className="cursor-pointer text-violet-500 underline">&larr;Volver atrás</p>
        <button  onClick={goToPay} className="cursor-pointer font-semibold rounded-xl text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 grow max-w-[300px]  p-2 hover:scale-110" type="submit">Continuar con el pago</button>
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
        "min-w-[300px] mx-auto cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
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