import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { Button } from "flowbite-react"

export const CategoryCard = ({urlImage, categoryName, }) => {
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
            <a href="#" className="text-white bg-violet-500 hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-500 dark:focus:ring-violet-600">Ver más</a>
        </div>
    </div>
</div>

  //   <Card isFooterBlurred className="w-full h-[300px] md:w-3/12">
    
  //   <Image
  //     removeWrapper
  //     alt={categoryName}
  //     className="z-0 w-full h-full object-cover"
  //     src={urlImage}
  //   />
  //   <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
  //     <div className="flex flex-grow gap-2 items-center">
        
  //       <div className="flex flex-col">
  //         <p className="font-biorhyme font-semibold capitalize text-lg text-white/80">{categoryName}</p>
          
  //       </div>
  //     </div>
  //     <Button className="bg-violet-400"  radius="full" size="sm">Ver más</Button>
  //   </CardFooter>
  // </Card>
  )
}
