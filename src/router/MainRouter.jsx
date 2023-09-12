import { Route, Routes } from "react-router-dom"

import { ProtectedRoutes } from "./ProtectedRoutes"
import { useState } from "react"
import { Home } from "../components/Home"
import { Nosotros } from "../Pages/Nosotros"
import { Productos } from "../Pages/Productos"



export const MainRouter = () => {
    const [user, setUser] = useState(null)

    return (
        <>
            <Routes>
                {/* EJEMPLO DE COMO VAN ESCRITAS LAS RUTAS */}
                <Route path="/" element={<Home/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/productos" element={<Productos/>}/>
                


                {/* ruta protegida */}
                <Route element={<ProtectedRoutes isAllowed={user} />}>
                    {/* <Route path="/admin" element={<AdminPages/>}/> */}
                </Route>


            </Routes>
        </>
    )
}