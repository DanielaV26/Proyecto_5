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
<<<<<<< HEAD
      <h2>Mis favoritos</h2>
      <div className="flex flex-wrap gap-8 w-full ">
=======
      <h2 className="text-6xl h- lg:h-16 text-center font-cookie mx-auto bg-gradient-to-t from-violet-600 to-yellow-200 text-transparent bg-clip-text mt-8 ">Mis favoritos</h2>
      <div className="flex flex-wrap lg:flex-row justify-center items-center gap-3 w-full  ">
>>>>>>> 5a99732d1acfb7dc226c0ded778acce847fa8ce6
        {obtenerFavoritos?.map((producto) => (
    <ProductCard key={producto._id} producto={producto} />
        ))}
      </div>
    </>

)
}