import "./Navbar.css"

export const Navbar = () => {
  return (
   <>
   <div className="containerNav">
    
   <div className="contenedorLogo">
    <img className="logoImg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341694/velas_y_mas/bright_y8e69o.png" alt="" />
    </div>

<div className="iconos">

    <div >
        <img className="iconoImg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341704/velas_y_mas/menu_blanco_edx4ri.png" alt="" />
    </div>


    <div>
        <img className="iconoImg"  src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341704/velas_y_mas/user_njbki2.png" alt="" />
        <img className="iconoImg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341704/velas_y_mas/lupa_vrcsuy.png" alt="" />
        <img className="iconoImg" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341703/velas_y_mas/carro_compras_qzpyyn.png" alt="" />
    </div>
    </div>
    </div>
   </>
  )
}
