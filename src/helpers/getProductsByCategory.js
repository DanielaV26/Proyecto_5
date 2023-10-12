import axios from 'axios'

export const getProductsByCategory = async (categoria) => {
  
  const url = `https://proyecto5-backend-ten.vercel.app/products/category/${categoria}`
  const {data} = await axios.get(url, {
    
headers:{
  "Access-Control-Allow-Origin": "*"
}
  })
  console.log(data)
  //El arreglo de productos que llega desde la base de datos se lo pasamos al use State
  return data.producto
}