import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"
import { UserProvider } from './context/user/UserProvider.jsx'
import { CartProvider } from './context/cart/cartProvider.jsx'
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import { PaymentProvider } from './context/payment/PaymentProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <NextUIProvider>
            <PaymentProvider>
          <PayPalScriptProvider options={{clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID}}>
            <App />
            </PayPalScriptProvider>
            </PaymentProvider>
          </NextUIProvider>
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
   

  </React.StrictMode>,
  
)
