import { RadioGroup, useRadio, VisuallyHidden, cn } from "@nextui-org/react";

export const Payment = () => {

  return (
    <section className="flex gap-4 flex-col w-full md:w-auto">
      <form className="flex flex-col p-4 bg-white border drop-shadow-sm w-full gap-4 rounded-xl">
        <h3 className="font-semibold font-montserrat text-lg">Método de pago</h3>
        <RadioGroup label="Elige tu método de pago">
          <CustomRadio description="" value="delivery" isSelected>
            <div className="flex items-center gap-2">
            <span>PayPal</span> <img className="w-8 h-8" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696869287/paypal-logo_kflbua.png" alt="logo PayPal" />
            </div>
          </CustomRadio>
          <CustomRadio description="" value="pickup">
            <div className="flex items-center gap-2">
            <span>Mercado Pago</span> <img className="w-8 h-8" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696869120/MERCADOPAGO_jbqkom.png" alt="" />
            </div>
          </CustomRadio>
          <CustomRadio description="" value="pickup">
            <div className="flex items-center gap-2">
            <span>Transferencia Bancaria</span> <img className="w-7 h-7" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696870258/tranferencia_emxuvd.png" alt="" />
            </div>
          </CustomRadio>
        </RadioGroup>
      </form>
      <div className="flex justify-between p-5 mt-3 gap-5">
        <p className="cursor-pointer text-violet-500 underline">&larr;Volver atrás</p>
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