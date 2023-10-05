import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./index.css"
import { UserProvider } from './context/user/UserProvider.jsx'
import { CartProvider } from './context/cart/cartProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <NextUIProvider>
            
            <App />
          </NextUIProvider>
        </BrowserRouter>
      </UserProvider>
    </CartProvider>

  </React.StrictMode>,
)
