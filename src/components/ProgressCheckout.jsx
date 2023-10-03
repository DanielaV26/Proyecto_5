import { useContext } from "react";
import { PaymentContext } from "../context/payment/paymentContext";

export const ProgressCheckout = () => {
  const [paymentState] = useContext(PaymentContext);

  return (
    <header className="flex justify-around w-full transition">

      <div className="flex flex-col justify-center items-center transition">
        <span
          className={`${
            paymentState.step === 1 ? "bg-fuchsia-500" : "bg-violet-500"
          } p-2 rounded-full w-10 text-center font-bold text-white transition`}
        >
          {paymentState.step === 1 ? <>1</> : <>&#10003;</>}
        </span>
        <p className="font-semibold font-montserrat transition">
          Datos Personales
        </p>
      </div>

      <div className="flex flex-col justify-center items-center transition">
        <span
          className={`${
            paymentState.step === 2
              ? "bg-fuchsia-500"
              : paymentState.step === 1
              ? "bg-gray-400"
              : "bg-violet-500"
          } p-2 rounded-full w-10 text-center font-bold text-white transition`}
        >
          {paymentState.step <= 2 ? <>2</> : <>&#10003;</>}
        </span>
        <p className="font-semibold font-montserrat transition">
          Tipo de Entrega
        </p>
      </div>

      <div className="flex flex-col justify-center items-center transition">
        <span
          className={`${
            paymentState.step === 3 ? "bg-fuchsia-500" : "bg-gray-400"
          } p-2 rounded-full w-10 text-center font-bold text-white transition`}
        >
          {paymentState.step <= 3 ? <>3</> : <>4</>}
        </span>
        <p className="font-semibold font-montserrat transition">
          Pago
        </p>
      </div>

    </header>
  );
};
