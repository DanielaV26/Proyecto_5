
import { ToastContainer } from "react-toastify"
import { CartModal } from "../components/CartModal"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { MainRouter } from "../router/MainRouter"
import { useContext } from "react"
import { CartContext } from "../context/cart/cartContext"
import { Outlet } from "react-router-dom"


export const MainLayout = ({children}) => {
    const [state, dispatch] = useContext(CartContext)
  return (
    <>
    <div className='text-montserrat'>
      <Header/>
      <Navbar/>
      <div className='md:px-24'>
      {children ? children : <Outlet/>}
      </div>
      {
        state.openCart ? <CartModal/> : <></>
      }
      
      <Footer />
      <ToastContainer/>
      </div>
    </>
  )
}
