import React from 'react';
import './Carrusel.css'; // Asegúrate de que la ruta sea correcta

export const Carrusel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
            <div className='carousel-image-container'>
          <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341702/velas_y_mas/bright8_ygluhh.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          
          <div className="carousel-caption">
          <div className='carousel-content-container'>
            <h3>Título del Slide 1</h3>
            <p>Texto descriptivo sobre el contenido del Slide 1.</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/ruta-del-enlace-1'}>
              Ver más
            </button>
            </div>
          </div>
        </div>
        {/* Repite este bloque para más slides */}
        <div className="carousel-item">
        <div className='carousel-image-container'>
          <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341700/velas_y_mas/bright6_lgv9lf.jpg" alt="Slide 2" />
          </div>
          <div className="carousel-caption">
          <div className='carousel-content-container'>
            <h3>Título del Slide 2</h3>
            <p>Texto descriptivo sobre el contenido del Slide 2.</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/ruta-del-enlace-2'}>
              Ver más
            </button>
          </div>
          </div>
        </div>
        <div className="carousel-item">
            <div className='carousel-image-container'>
          <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341700/velas_y_mas/bright6_lgv9lf.jpg" alt="Slide 2" />
          </div>
          <div className="carousel-caption">
            <div className='carousel-content-container'>
            <h3>Título del Slide 2</h3>
            <p>Texto descriptivo sobre el contenido del Slide 2.</p>
            <button className="btn btn-primary" onClick={() => window.location.href = '/ruta-del-enlace-2'}>
              Ver más
            </button>
          </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
