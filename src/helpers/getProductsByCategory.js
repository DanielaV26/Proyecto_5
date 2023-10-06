import axios from 'axios'

export const getProductsByCategory = async (categoria) => {
  
  const url = `https://proyecto5-backend-17i4e1gbz-ninalizbeth.vercel.app/products/category/${categoria}`
  const {data} = await axios.get(url, {
    
headers:{
  "Access-Control-Allow-Origin": "*"
}
  })
  console.log(data)
  //El arreglo de productos que llega desde la base de datos se lo pasamos al use State
  return data.producto
}