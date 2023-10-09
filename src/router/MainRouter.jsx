import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home"
import { Nosotros } from "../Pages/Nosotros"
import { Productos } from "../Pages/Productos"
import { ProductoPage } from "../Pages/ProductoPage"
import { Checkout } from "../Pages/Checkout"
import { CheckoutUserForm } from "../Pages/CheckoutUserForm"
import { Delivery } from "../Pages/Delivery"
import { Favorites } from "../Pages/Favorites"
import { UserProfile } from "../Pages/UserProfile"
import { Payment } from "../Pages/Payment"



export const MainRouter = () => {

    return (

        <Routes>
            {/* EJEMPLO DE COMO VAN ESCRITAS LAS RUTAS */}
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductoPage />} />
            <Route path="/favorites" element={<Favorites />}/>
            <Route path="/checkout" element={<Checkout />} >
                <Route path="" element={<CheckoutUserForm />} />
                <Route path="delivery" element={<Delivery/>} />
                <Route path="payment" element={<Payment/>} />
            </Route>
            <Route path="/profile" element={<UserProfile />} />


            {/* ruta protegida */}
            {/* <Route element={<ProtectedRoutes isAllowed={user} />}>
            </Route> */}


        </Routes>

    )
}