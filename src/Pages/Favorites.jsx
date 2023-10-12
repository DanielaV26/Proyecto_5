import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export const Favorites = () => {

    const [obtenerFavoritos, setObtenerFavoritos] = useState([])
    const urlBackend = 'https://proyecto5-backend-ten.vercel.app/products/favorites'

    const getProduct = async () => {
        try {
            const favoritos = JSON.parse(localStorage.getItem("favorites")) || []
            console.log(favoritos)
            const { data } = await axios.post(urlBackend, favoritos, {
    headers:{
                  "Access-Control-Allow-Origin": "*", 
                  "Content-Type": "application/json"
                }
                  })
                  console.log(data)
            setObtenerFavoritos(data.favoritos)
} catch (error) {
console.log(error)
}   
    }

    useEffect(() => {
      getProduct()
    
    }, [])
    
return (
    <>
      <h2>Mis favoritos</h2>
      <div className="flex flex-wrap gap-8 w-full ">
        {obtenerFavoritos?.map((producto) => (
    <ProductCard key={producto._id} producto={producto} />
        ))}
      </div>
    </>

)
}