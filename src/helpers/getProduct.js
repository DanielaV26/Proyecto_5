import axios from 'axios'

export const getProducts = async () => {
  
  const url = 'https://proyecto5-backend-ten.vercel.app/products/'
  const {data} = await axios.get(url, {
    
headers:{
  "Access-Control-Allow-Origin": "*"
}
  })
 
  localStorage.setItem("productos", JSON.stringify(data));


  return data.productos
}