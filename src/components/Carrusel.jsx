import './Carrusel.css'; // Importa los estilos CSS para el carrusel

export const Carrusel = () => {
  return (
    <div id="carouselExample" className="carousel slide"> {/* Contenedor del carrusel */}
      <div className="carousel-inner"> {/* Contenedor de los slides */}
        <div className="carousel-item active"> {/* Slide activo */}
          <div className='carousel-split'> {/* División del slide en dos partes */}
            <div className='carousel-image-container'> {/* Contenedor de la imagen */}
              <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693430732/Captura_de_pantalla_2023-08-30_172455_hsdnf1.png" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-caption"> {/* Contenedor del contenido */}
              <div className='carousel-content-container'> {/* Contenedor del contenido centrado */}
                <h3>Tesoros literarios</h3> {/* Título del slide */}
                <p> Descubre la variada selección de tesoros literarios que te llevarán a viajes a través del tiempo, dimensiones paralelas y emociones inexploradas. En esta sección, te presentamos una diversa gama de articulos que satisfarán incluso al lector más curioso.</p> {/* Descripción del slide */}
                <button className="btn btn-primary" onClick={() => window.location.href = '/ruta-del-enlace-1'}>
                  Ver más
                </button> {/* Botón para ver más detalles */}
              </div>
            </div>
          </div>
        </div>
        {/* Repite este bloque para más slides */}
        <div className="carousel-item"> {/* Otro slide */}
          <div className='carousel-split'>
            <div className='carousel-image-container'>
              <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693431138/Captura_de_pantalla_2023-08-30_173113_dxx3vg.png" alt="Slide 2" />
            </div>
            <div className="carousel-caption">
              <div className='carousel-content-container'>
                <h3>Velas literarias</h3>
                <p> Sumérgete en un mundo de sensaciones mientras te adentras en las historias que amas con nuestras velas únicas, diseñadas para evocar los momentos más queridos de tus libros favoritos. Cada vela es una obra de arte aromática cuidadosamente elaborada para llevar la magia de la literatura a tu espacio.</p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/ruta-del-enlace-2'}>
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item"> {/* Otro slide */}
          <div className='carousel-split'>
            <div className='carousel-image-container'>
              <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693428219/Captura_de_pantalla_2023-08-30_164313_rbmnpy.png" alt="Slide 2" />
            </div>
            <div className="carousel-caption">
              <div className='carousel-content-container'>
                <h3>Novedades del mes</h3>
                <p>Explora nuestro catálogo de lecturas fascinantes y sumérgete en las páginas de las últimas novedades literarias de este mes. Descubre aventuras fantásticas, el mejor romance juvenil y mundos por explorar. Te invitamos a disfrutar de lo mejor que el mundo de los libros tiene para ofrecer en este emocionante mes de descubrimientos. ¿Listo para comenzar tu próxima aventura de lectura?</p>
                <button className="btn btn-primary" onClick={() => window.location.href = '/ruta-del-enlace-2'}>
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* ... Repite este bloque para más slides */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button> {/* Botón para cambiar al slide anterior */}
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> {/* Botón para cambiar al siguiente slide */}
    </div>
  );
};

