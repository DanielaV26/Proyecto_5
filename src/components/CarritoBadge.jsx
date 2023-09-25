import { Badge } from "@nextui-org/react"
import { CartIcon } from "./CartIcon"


export const CarritoBadge = () => {
  return (
    <>
    <Badge color="danger" content={50} shape="circle">
          <CartIcon size={30} />
        </Badge></>
  )
}
