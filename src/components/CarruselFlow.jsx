'use client';

import { Carousel } from 'flowbite-react';

export const CarruselFlow = () => {
  return (
    <Carousel>
        <div className='relative w-full h-auto'>
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695654689/Portada_para_Facebook_Nail_Art_Gradiente_Pasteles_1_swrfwn.png"
      />
            <h3 className='absolute top-48 left-48 '>Titulo de imagen</h3>
      </div>
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695656999/Portada_para_Facebook_Nail_Art_Gradiente_Pasteles_ewg06v.png"
      />
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695659242/carrusel_cw0ibf.jpg"
      />
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695654689/Portada_para_Facebook_Nail_Art_Gradiente_Pasteles_1_swrfwn.png"
      />
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695654689/Portada_para_Facebook_Nail_Art_Gradiente_Pasteles_1_swrfwn.png"
      />
    </Carousel>
  )
}


