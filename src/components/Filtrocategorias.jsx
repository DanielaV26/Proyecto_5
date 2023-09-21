import { useEffect, useState } from "react"
import { CategoryCard } from "./CategoryCard"
import axios from 'axios'
import { ProductCard } from "./ProductCard"

export const Filtrocategorias = () => {
const [filtro, setFiltro] = useState("")
//Usestate para los productos filtrados por categoria
const [filteredProducts, setfilteredProducts] = useState([])

const onFilterChange = (filtroEvento) =>{
setFiltro(filtroEvento)

}

const getProductsByCategory = async () => {

  const url = `https://proyecto5-backend-e5u3-dev.fl0.io/products/category/${filtro}`
  const {data} = await axios.get(url, {
    
headers:{
  "Access-Control-Allow-Origin": "*"
}
  })
  console.log(data)
  //El arreglo de productos que llega desde la base de datos se lo pasamos al use State
  setfilteredProducts (data.producto)
}
useEffect(() => {
  if (!filtro){
return
  } else{ 
  getProductsByCategory()
  }


}, [filtro])




  const categorias = [
    {
      urlImage:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341705/velas_y_mas/WhatsApp_Image_2023-08-24_at_18.47.16_m1wjxy.jpg",  
      categoryName:"velas"
    },
    {
      urlImage:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1694098996/1277_cifspv.jpg",  
      categoryName:"Libros"
    },
    {
      urlImage:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341694/velas_y_mas/B1_ihr5mr.jpg",  
      categoryName:"Marcadores"
    },
    {
      urlImage:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1693055602/WhatsApp_Image_2023-08-24_at_19.04.08_t9tkel.jpg",  
      categoryName:"3D Book"
    },
    {
      urlImage:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1693233820/Bright5_tdbvdo.jpg",  
      categoryName:"Tazas"
    },
    {
      urlImage:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341698/velas_y_mas/bright45_z1jrtk.jpg",  
      categoryName:"Varios" 
    },
 
  ]
  return (
      <>
      <div  className="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button" onClick={() =>onFilterChange('')} className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">Categorías</button>
    <button type="button" onClick={() =>onFilterChange("Velas")}  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Velas</button>
    <button type="button" onClick={() =>onFilterChange("Libros")}  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Libros</button>
    <button type="button" onClick={() =>onFilterChange("Marcadores")} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Marcadores</button>
    <button type="button" onClick={() =>onFilterChange("3d book")} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">3D Book</button>
    <button type="button" onClick={() =>onFilterChange("Tazas")} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Tazas</button>
    <button type="button" onClick={() =>onFilterChange("Varios")} className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Varios</button>
</div>
<div  className="flex flex-wrap w-full gap-5 justify-center items-center ">
    { 

  
    (filtro === '') && //Condicional para que se muestren las categorias solo si el filtro esta vacio
    
    categorias.map((categoria, index) =>(
<CategoryCard urlImage={categoria.urlImage} categoryName={categoria.categoryName} key={index}/> 
 ))}
 {
  (filtro !== '') && // condicional para que se muestren los productos solo si el filtro no esta vacio
  filteredProducts.map((producto) => (

    // Este es el componente  que creamos (tarjeta producto) le pasamos las props que vienen desde la base de datos.
    <ProductCard key={producto._id} precio={producto.valor} imagen={producto.imagenes.principal} titulo={producto.nombre} id={producto._id}/>
  ))
 }
</div>

      </>
  )
}
