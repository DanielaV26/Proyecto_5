/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react"

export const CategoryCard = ({urlImage, categoryName, setFiltro }) => {
  return (

<div className="w-full max-w-[300px] bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 relative">
        <Image isZoomed className="aspect-square" src={urlImage} alt={categoryName} />
    <div className="w-full h-full flex flex-row">
            <h5 className="capitalize text-4xl text-center font-cookie  text-gray-900 dark:text-white w-1/2 py-1">{categoryName}</h5>
            <div onClick={() =>setFiltro(categoryName)} className="text-violet-600 focus:ring-4 focus:outline-none  font-medium cursor-pointer hover:scale-110 font-mooli w-1/2 h-auto flex items-center justify-center">Ver más &rarr;</div>
    </div>
</div>

  )
}
