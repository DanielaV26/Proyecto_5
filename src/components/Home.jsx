
import { CarruselFlow } from "./CarruselFlow"


export const Home = () => {
  return (
    <>
<div className="w-full h-96">
    <CarruselFlow/>
    </div>
    
<div  className="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button"  className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">Categorías</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Velas</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Libros</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Marcadores</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Llaveros</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Tazas</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Varios</button>
</div>
<div  className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341705/velas_y_mas/WhatsApp_Image_2023-08-24_at_18.47.16_m1wjxy.jpg" alt="velas"/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1694098996/1277_cifspv.jpg" alt="libros"/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341694/velas_y_mas/B1_ihr5mr.jpg" alt="Marcadores"/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693055602/WhatsApp_Image_2023-08-24_at_19.04.08_t9tkel.jpg" alt="Llaveros"/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693233820/Bright5_tdbvdo.jpg" alt="tazas"/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341698/velas_y_mas/bright45_z1jrtk.jpg" alt="Varios"/>
    </div>
    
</div>

    {/* <div className="dibujoVela">
        <img className="velaDibujo" src="/assets/imges/frasco-vela.png" alt="" />
    </div>
<div className="Home">
    <h1 className="titulo">Velas literarias</h1>
    <p className="parrafo">Haciendo luz, iluminando tus ideas</p>
    </div>
    <CarruselFlow/>
    
    <div className="container">

      
   
{
  categorias.map((category)=>(
    <DivCategoria categoria={category.categoria} imagen ={category.imagen} key={category.categoria}/>
  ))
}
    </div> */}
    
    </>
  )
}
