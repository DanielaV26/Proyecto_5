import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Link } from "react-router-dom";
import { DeleteFav } from "../components/DeleteFav";


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
    const removeAllFavorites = () => {
      localStorage.removeItem("favorites")
      setObtenerFavoritos([])
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
          <img className="lg:w-auto w-48 lg:mt-12 mt-10 " src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1697145459/55364014-coraz%C3%BDn-roto-est%C3%BD-llorando-s%C3%BDmbolo-del-amor-sentado-en-un-charco-de-l%C3%BDgrimas-amor-no-correspondido-transformed-removebg-preview_mij4kh.png" alt="" />
          <p className="font-mooli text-xl p-5 lg:text-2xl text-center text-violet-400 ">Aún no tienes ningún producto en favoritos</p>
          <Link to="/" className="flex w-auto items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Volver</Link>
          <button onClick={removeAllFavorites}>
          <DeleteFav className="w-20 cursor-pointer"/>
          </button>
         
          
          </div>):
    
        obtenerFavoritos?.map((producto) => (
    <ProductCard key={producto._id} producto={producto} />
        ))  }
     
    
          
         
         
      </div>
    </>

)
}