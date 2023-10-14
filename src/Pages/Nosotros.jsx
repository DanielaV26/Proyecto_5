

export const Nosotros = () => {
  return (
    <>
      <div className="flex flex-col items-center rounded-lg  sm:flex-row w-full p-4 pl-16 pr-16">
        <img className=" md:max-w-xl object-cover w-full rounded-3xl h-96 md:h-auto  md:rounded-none md:rounded-l-lg p-10 mt-12" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696733667/MicrosoftTeams-image_1_l1wo5u.png" alt="" />
        <div className="flex flex-col justify-between  bg">
          <h5 className="text-5xl lg:text-7xl font-cookie mx-auto bg-gradient-to-t from-violet-600 to-yellow-200 text-transparent bg-clip-text mt-2 ">Nuestra historia</h5>
          <article className=" text-lg  font-mooli text-gray-700 dark:text-gray-400 flex flex-col gap-3 text-center">
            <p >Brightbooks comenzó como un emprendimiento creado en el año 2020, inspirado en la creatividad de las velas y también en la importancia de la lectura.</p>
              <p>Con el pasar de los años se han agregado diferentes productos que nuestros fieles clientes nos recomiendan, y así nuestro emprendimiento ha ido creciendo en estos años.</p>
              <p>Todos nuestros productos son hechos a mano por nosotros, los hacemos con mucho cariño y dedicación.</p>

          </article>
        </div>
      </div>

      <div className="">
        <h5 className="text-5xl lg:text-7xl font-cookie mx-auto bg-gradient-to-t from-violet-600 to-yellow-200 text-transparent bg-clip-text mt-8 text-center md:text-start md:ml-14">Acerca de nosotros</h5>
        <article className="mb-2 px-12 text-lg font-mooli text-gray-700 lg:text-left dark:text-gray-400 flex flex-col gap-2  text-center">
          <p >Creemos en los libros, nos apasionan y nos emocionan. Es por esto que nuestros productos utilizados en conjunto, crean una atmósfera cálida que brinda tranquilidad y bienestar en tus pasatiempos.</p>
          <p>Estamos convencidos de los beneficios del hábito de la lectura, y nos motiva a ser capaces de conectar cada día a nuevas lectoras y lectores con los libros que a ellos les interesan.</p>
          <p>Contamos con una gran oferta de libros y velas que crece día a día porque sabemos que cada uno de nosotros tiene gustos e intereses únicos.</p>
        </article>

        <img className="mt-6 h-48 w-full lg:h-96 lg:w-full  lg:pl-36  lg:pr-36 lg:mt-12" src="https://res.cloudinary.com/dhijxrbsk/image/upload/v1696737013/MicrosoftTeams-image_3_jwjdyz.jpg" alt="fachada" />
      </div>

    </>
  )
}
