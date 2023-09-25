/* eslint-disable react/prop-types */

import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import {Link} from  "react-router-dom"


export const ProductCard = ({ titulo, precio, imagen, id }) => {
    return (
        <>
            
          <Card as={Link} isFooterBlurred to={`/producto/${id}`} className="w-full h-[300px] md:w-3/12 ">
    <CardHeader 
    className="absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-slate-900 to-transparent">
      <p className="text-white/90 uppercasefont-bold">{titulo}</p>
    
    </CardHeader>
    <Image
      removeWrapper
      alt={titulo}
      className="z-0 w-full h-full object-cover"
      src={imagen}
    />
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center flex-col">
        
        <div className="flex flex-col  ">
          <p className=" text-slate-300 font-bold">${precio}</p>
          
        </div>
        <div className="flex gap-3">
      <Button className="bg-violet-400" radius="full" size="sm">Agregar al carrito</Button>
      <Button className="bg-violet-400  " radius="full" size="sm">Comprar</Button>
      </div>
      </div>
    </CardFooter>
  </Card>

        </>
    )
}
