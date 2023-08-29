import { Carrusel } from "./Carrusel"
import { DivCategoria } from "./DivCategoria"
import "./Home.css"

const categorias =[
  {
    categoria:"VELAS",
    imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693055602/WhatsApp_Image_2023-08-24_at_18.47.16_tfhbmi.jpg"
  },
  {
    categoria:"LIBROS",
    imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/v1693326193/WhatsApp_Image_2023-08-24_at_19.40.09_re43yc.jpg"
  },
  {
    categoria:"MARCADORES",
    imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693233859/B1_neqh6l.jpg"
  },
  {
    categoria:"3D BOOK",
    imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693055602/WhatsApp_Image_2023-08-24_at_19.04.08_t9tkel.jpg"
  },
  {
    categoria:"TAZAS",
    imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693233820/Bright5_tdbvdo.jpg"
  },
  {
    categoria:"VARIOS",
    imagen:"https://res.cloudinary.com/dt7h6qci4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1693055602/WhatsApp_Image_2023-08-24_at_19.38.57_2_pbfyyf.jpg"
  }
]

export const Home = () => {
  return (
    <>
    <div className="dibujoVela">
        <img className="velaDibujo" src="/assets/imges/frasco-vela.png" alt="" />
    </div>
<div className="Home">
    <h1 className="titulo">Velas literarias</h1>
    <p className="parrafo">"Haciendo luz, iluminando tus ideas"</p>
    </div>
    <Carrusel/>
    
    <div className="container">

      
   
{
  categorias.map((category)=>(
    <DivCategoria categoria={category.categoria} imagen ={category.imagen} key={category.categoria}/>
  ))
}
    </div>
    
    </>
  )
}
