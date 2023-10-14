/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { PaymentContext } from "./paymentContext";
import { paymentReducer } from "./paymentReducer";

const initialState = {
    personalData:{},
    delivery: false,
    step:3,
    totalvalue:1,
    order:null
}

export const PaymentProvider =({children}) => {
const [state, dispatch] = useReducer(paymentReducer,initialState)
return(

    <PaymentContext.Provider 
    value={[state, dispatch]}>
        {children}
    </PaymentContext.Provider>
)

}