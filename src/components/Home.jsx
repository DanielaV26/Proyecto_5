
import { CarruselFlow } from "./CarruselFlow"
import { Filtrocategorias } from "./Filtrocategorias"


export const Home = () => {
  return (
    <>
<div className="w-full h-48 md:h-96 ">
    <CarruselFlow/>
    </div>
    <Filtrocategorias/>


    
    </>
  )
}
