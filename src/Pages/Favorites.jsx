import axios from "axios";
import { useEffect, useState } from "react";

export const Favorites = () => {

    const [obtenerFavoritos, setObtenerFavoritos] = useState([])
    const urlBackend = 'https://proyecto5-backend-ten.vercel.app/products/favorites'

    const getProduct = async () => {
        try {
            const favoritos = JSON.parse(localStorage.getItem("favorites")) || []
            console.log(favoritos)
            const { data } = await axios.get(urlBackend, favoritos, {
    
                headers:{
                  "Access-Control-Allow-Origin": "*"
                }
                  })
            setObtenerFavoritos(data)
} catch (error) {
console.log(error)
}   
    }

    useEffect(() => {
      getProduct()
    
    }, [])
    





return (
    <>
{
    JSON.stringify(obtenerFavoritos)
}
    </>

)
}