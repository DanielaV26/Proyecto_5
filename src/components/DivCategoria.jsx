

export const DivCategoria = ({categoria, imagen}) => {
  return (
    <div className="productos">
        <h4>{categoria}</h4>
    <img className="productosImg" src={imagen} alt={categoria} /></div>
  )
}
