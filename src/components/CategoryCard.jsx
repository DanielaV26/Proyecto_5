import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { Button } from "flowbite-react"

export const CategoryCard = ({urlImage, categoryName, setFiltro }) => {
  return (

    
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg aspect-square" src={urlImage} alt={categoryName} />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-3xl text-center font-biorhyme font-semibold capitalize tracking-tight text-gray-900 dark:text-white">{categoryName}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            <button onClick={() =>setFiltro(categoryName)} className="text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-500 dark:focus:ring-violet-600">Ver más</button>
        </div>
    </div>
</div>


  )
}
