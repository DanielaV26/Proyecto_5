import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export const ProductoPage = () => {
    const param = useParams()
    const id = param.id
    const [producto, setProducto] = useState({})
    const getProducto = async () => {
      const url = `https://proyecto5-backend-e5u3-dev.fl0.io/products/product/${id}`
      const {data} = await axios.get(url, {
    
        headers:{
          "Access-Control-Allow-Origin": "*"
        }
          })
      setProducto(data.producto)
    }
    useEffect(() => {

      getProducto()
    
    }, [])
    
  return (
    <>
    {JSON.stringify(producto)}
    </>
   
  )
}
