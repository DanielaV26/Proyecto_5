'use client';

import { Carousel } from 'flowbite-react';

export const CarruselFlow = () => {
  return (

    <Carousel className='lg:mt-36 ' style={{ top: '-100px' }}>
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696432818/Este_mes_sum%C3%A9rgete_en_un_oc%C3%A9ano_de_historias._Tu_pr%C3%B3xima_aventura_te_espera_aqu%C3%AD._kzjkfk.jpg"
      />
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696432818/Enciende_la_magia_de_la_lectura_con_nuestras_velas_arom%C3%A1ticas_literarias._vfchcf.jpg"
      />
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696432819/Texto_del_p%C3%A1rrafo_hmrh9f.png"
      />
    </Carousel>
    
  )
}


