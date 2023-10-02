'use client';

import { Carousel } from 'flowbite-react';

export const CarruselFlow = () => {
  return (
    <Carousel>
        <div className='relative w-full  h-auto'>
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695685594/1z_lzayld.jpg"
      />
      <div className="">
            <h3 className="">Titulo de imagen</h3>
            </div>
      </div>
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695686618/2z_a1jwaa.jpg"
      />
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1695685594/1z_lzayld.jpg"
      />
      
    </Carousel>
  )
}


