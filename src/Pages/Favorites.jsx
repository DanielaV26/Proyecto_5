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
      <h2 className="text-6xl h- lg:h-16 text-center font-cookie mx-auto bg-gradient-to-t from-violet-600 to-yellow-200 text-transparent bg-clip-text mt-8 ">Mis favoritos</h2>
      <div className="flex flex-wrap lg:flex-row justify-center items-center gap-3 w-full  ">
        {obtenerFavoritos.length === 0? 
        (<div className="flex flex-col justify-center items-center">
          <img className="lg:w-40 w-36 mt-20" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1697129491/corazon_roto_gris_lfp6s3.png" alt="" />
          <p className="mt-10 font-mooli text-xl p-5 lg:text-2xl text-center text-violet-400 ">Aún no tienes ningún producto en favoritos</p>
          </div>):
    
        obtenerFavoritos?.map((producto) => (
    <ProductCard key={producto._id} producto={producto} />
        ))  }
      </div>
    </>

)
}