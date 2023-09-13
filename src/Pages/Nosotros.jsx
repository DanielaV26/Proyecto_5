import { Link } from "react-router-dom"

export const Nosotros = () => {
  return (
    <>
  
<Link to="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1694525267/ndclpyviio4vkuotc3eu.jpg" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nosotros</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Brightbooks comenzó como un emprendimiento creado en el año 2020, inspirado en la creatividad de las velas y también la importancia de la lectura. Con el pasar de los años se han agregado diferentes productos que nuestros fieles clientes nos recomiendan.
Creemos en los libros, nos apasionan y nos emocionan. Es por esto que nuestros productos utilizados en conjunto, crean una atmósfera cálida que brinda tranquilidad y bienestar en tus pasatiempos.
Estamos convencidos de los beneficios del hábito de la lectura y nos motiva a ser capaces de conectar cada día a nuevas lectoras y lectores con los libros que a ellos les interesan.
Contamos con una gran oferta de libros y velas que crece día a día porque sabemos que cada uno de nosotros tiene gustos e intereses únicos.
</p>
    </div>
</Link>

    </>
  )
}
