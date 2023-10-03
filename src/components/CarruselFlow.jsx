'use client';

import { Carousel } from 'flowbite-react';

export const CarruselFlow = () => {
  return (
    <Carousel>
        <div className='relative w-full  h-auto'>
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696289681/Explora_nuestro_cat%C3%A1logo_de_lecturas_fascinantes_y_sum%C3%A9rgete_en_las_p%C3%A1ginas_de_las_%C3%BAltimas_novedades_literarias_de_este_mes._Descubre_aventuras_fant%C3%A1sticas_el_mejor_romance_juvenil_y_mundos_por_e_ms4w01.jpg"
      />
      <div className="">
            <h3 className="">Titulo de imagen</h3>
            </div>
      </div>
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696289681/Sum%C3%A9rgete_en_un_mundo_de_sensaciones_mientras_te_adentras_en_las_historias_que_amas_con_nuestras_velas_%C3%BAnicas_dise%C3%B1adas_para_evocar_los_momentos_m%C3%A1s_queridos_de_tus_libros_favoritos._Cada_vela_es_1_nehjpe.jpg"
      />
      <img
        alt="..."
        src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696289681/Descubre_la_variada_selecci%C3%B3n_de_tesoros_literarios_que_te_llevar%C3%A1n_a_viajes_a_trav%C3%A9s_del_tiempo_dimensiones_paralelas_y_emociones_inexploradas._En_esta_secci%C3%B3n_te_presentamos_una_diversa_gama_d_w7k5pr.jpg"
      />
      
    </Carousel>
  )
}


