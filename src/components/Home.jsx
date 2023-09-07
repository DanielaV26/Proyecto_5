
// import { DivCategoria } from "./DivCategoria"
import { CarruselFlow } from "./CarruselFlow"


// const categorias =[
//   {
//     categoria:"VELAS",
//     imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693055602/WhatsApp_Image_2023-08-24_at_18.47.16_tfhbmi.jpg"
//   },
//   {
//     categoria:"LIBROS",
//     imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1693326193/WhatsApp_Image_2023-08-24_at_19.40.09_re43yc.jpg"
//   },
//   {
//     categoria:"MARCADORES",
//     imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693233859/B1_neqh6l.jpg"
//   },
//   {
//     categoria:"3D BOOK",
//     imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693055602/WhatsApp_Image_2023-08-24_at_19.04.08_t9tkel.jpg"
//   },
//   {
//     categoria:"TAZAS",
//     imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693233820/Bright5_tdbvdo.jpg"
//   },
//   {
//     categoria:"VARIOS",
//     imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693055602/WhatsApp_Image_2023-08-24_at_19.38.57_2_pbfyyf.jpg"
//   }
// ]

export const Home = () => {
  return (
    <>

    <CarruselFlow/>
    
<div  className="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button type="button"  className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
    <button type="button"  className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
</div>
<div  className="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt=""/>
    </div>
    <div>
        <img  className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt=""/>
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
