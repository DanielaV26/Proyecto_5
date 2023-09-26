
export const ProductGallery = () => {
  return (
    <>

   <h2 className="font-lilitaone text-4xl">Productos que te podrían interesar</h2>
    
<div className="grid grid-cols-2 relative whitespace-nowrap overflow-hidden h-52 grid-rows-2 gap-80">
    <div className="grid grid-cols-5 gap-56 animate-marquee row-span-2 ">
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693796030/Bright2_j4bu9x.jpg" alt=""/>
        </div>
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693795987/bright54_ltw5dj.jpg" alt=""/>
        </div>
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg mx-4 aspect-square object-cover" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341702/velas_y_mas/bright8_ygluhh.jpg" alt=""/>
        </div>
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341694/velas_y_mas/bright13_bekh0g.jpg" alt=""/>
        </div>
        <div className="h-52 w-52 ml ">
            <img className=" h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341696/velas_y_mas/bright27_gxq8ys.jpg" alt=""/>
        </div>
    </div>
    <div className="grid grid-cols-5 gap-56 animate-marquee2 ">
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693796030/Bright2_j4bu9x.jpg" alt=""/>
        </div>
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693795987/bright54_ltw5dj.jpg" alt=""/>
        </div>
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg aspect-square object-cover mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341702/velas_y_mas/bright8_ygluhh.jpg" alt=""/>
        </div>
        <div className="h-52 w-52">
            <img className="h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341694/velas_y_mas/bright13_bekh0g.jpg" alt=""/>
        </div>
        <div className="h-52 w-52">
            <img className=" h-auto max-w-full rounded-lg mx-4" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693341696/velas_y_mas/bright27_gxq8ys.jpg" alt=""/>
        </div>
    </div>
</div>

    </>
  )
}
