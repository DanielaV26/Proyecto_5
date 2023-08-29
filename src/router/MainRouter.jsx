import { Route, Routes } from "react-router-dom"

import { ProtectedRoutes } from "./ProtectedRoutes"
import { useState } from "react"



export const MainRouter = () => {
    const [user, setUser] = useState(null)

    return (
        <>
            <Routes>
                {/* EJEMPLO DE COMO VAN ESCRITAS LAS RUTAS */}
                {/* <Route path="/nosotros" element={<Home/>}/> */}

                {/* ruta protegida */}
                <Route element={<ProtectedRoutes isAllowed={user} />}>
                    {/* <Route path="/admin" element={<AdminPages/>}/> */}
                </Route>


            </Routes>
        </>
    )
}