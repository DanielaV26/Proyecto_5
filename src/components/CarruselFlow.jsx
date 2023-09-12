'use client';

import { Carousel } from 'flowbite-react';

export const CarruselFlow = () => {
  return (
    <Carousel>
        <div className='relative w-full h-auto'>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
            <h3 className='absolute top-48 left-48 '>Titulo de imagen</h3>
      </div>
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  )
}


