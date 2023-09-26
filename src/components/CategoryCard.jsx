import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { Button } from "flowbite-react"

export const CategoryCard = ({urlImage, categoryName}) => {
  return (
    <Card isFooterBlurred className="w-full h-[300px] md:w-3/12">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
      <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
    </CardHeader>
    <Image
      removeWrapper
      alt={categoryName}
      className="z-0 w-full h-full object-cover"
      src={urlImage}
    />
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <div className="flex flex-grow gap-2 items-center">
        
        <div className="flex flex-col">
          <p className="text-tiny text-white/60">{categoryName}</p>
          
        </div>
      </div>
      <Button className="bg-violet-400"  radius="full" size="sm">Get App</Button>
    </CardFooter>
  </Card>
  )
}
