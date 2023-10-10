import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { ProductGallery } from "../components/ProductGallery"
import { CartContext } from "../context/cart/cartContext";
import { CartSvg } from "../components/CartSvg";
// import { FeaturedProducts } from "../components/FeaturedProducts";
import { agregarPuntoAlPrecio } from "../helpers/precioConPunto"
import { HeartSvg } from "../components/HeartSvg";
import { toast } from "react-toastify";

export const ProductoPage = () => {
  const { id } = useParams(); //destructuración de id. useParams lee los parámetros de la URL(todo lo que viene después del (/) )
  const [producto, setProducto] = useState({});


  const getProducto = async () => {
    const url = `https://proyecto5-backend-17i4e1gbz-ninalizbeth.vercel.app/products/product/${id}`;
    const { data } = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    setProducto(data.producto);
    
  };

  const precioFormateado = agregarPuntoAlPrecio(producto?.valor)

  //se utiliza para ejecutar el código dentro del él según las dependencias.
  useEffect(() => {
    getProducto();
  }, []); /* ([]) es el arreglo de dependencias del useEffect */

  useEffect(() => {
    isInFavs();
  }, [producto])

  const incrementar = () => {
    const newQty = state.cartItems.map((item) => {
      /* Estamos creando un nuevo arreglo con el metodo (map) */
      if (item._id === producto._id) {
        /* Evaluamos si es que coninciden el item que estamos iterando con el producto de esta pagina */
        item.cantidad =
          item.cantidad + 1; /* Si es que cinciden se le suma uno */
        return item; /* retornamos el item con la cantidad sumada */
      } else {
        /* Si no coincide lo deja igual */
        return item;
      }
    });
    dispatch({
      /* Burrito */ type: "ADD QTY" /* instrucción  de sumar 1*/,
      payload: newQty /* el paquete */,
    });
  };

  const decrementar = () => {
    if (thisItem.cantidad <= 1) {
      dispatch({
        type: "REMOVE" /*instruccion de quitar un producto del carrito*/,
        payload: id,
      });
      return;
    }
    const newQty = state.cartItems.map((item) => {
      if (item._id === producto._id) {
        item.cantidad = item.cantidad - 1;
        return item;
      } else {
        return item;
      }
    });
    dispatch({
      type: "SUBTRACT QTY",
      payload: newQty,
    });
  };

  const buyNow = (event) => {
    event.preventDefault();
    if (thisItem.cantidad < 1) {
      dispatch({
        type: "ADD",
        payload: { ...producto, cantidad: 1 },
      });
    }

    dispatch({
      type: "OPEN",
    });
  };

  const [state, dispatch] = useContext(CartContext);
  //  constante thisItem  toma el valor que tiene  el item que tiene esta pag dentro del carrito, esto lo hace con el metodo (find) que compara los id y nos retorna el item.
  const thisItem = state.cartItems.find((item) => item._id === producto._id);

  const addCart = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD",
      payload: { ...producto, cantidad: 1 },
    });
    toast("Producto agregado con éxito")
  };
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state.cartItems));
  }, [state]);

  // constante evalua con un metodo (some) de array si el producto esta o no en el carrito
  const isInCart = state.cartItems.some((item) => item._id === producto._id);

  const [addFavorites, setAddFavorites] = useState(false)  /* uso addFavorites para ver si un producto está  favoritos o no. */
  const cambiaFavorites = () => {  /* Esto define una función llamada cambiaFavorites. Cuando se llama a esta función... */
    setAddFavorites(!addFavorites) /* se utiliza setAddFavorites para cambiar el valor de addFavorites al valor opuesto (si era false, se convierte en true, y viceversa) */
  }

  useEffect(() => { /* Se ejecutacada vez que el estado de addFavorites cambia y dentro de guarda el valor de adFavorites en el LS */
   handleFavorites()
  }, [addFavorites])

  const handleFavorites = () => {  /* funcion para agregar productos a fav */
    const favorites = JSON.parse(localStorage.getItem("favorites")) || /* obtengo la lista de fav guardada en el LS y se guarda en favorites */[]; /* Y si no hay favoritos llega como arreglo vacio */
    if (addFavorites) {
      if (!favorites.includes(producto._id)) { /* verifico que el producto NO este en la llista de favoritos */
        favorites.push(producto._id)  /* Aqui se empuja al LS la nueva info con  el nuevo producto agregado */
        localStorage.setItem("favorites", JSON.stringify(favorites))
      }
    } else {
      const index = favorites.indexOf(producto._id)
      console.log({index})
      if(index>=0){
        console.log('hay index')
        favorites.splice(index, 1)
        localStorage.setItem("favorites", JSON.stringify(favorites))
      }
    }
  }

  const isInFavs = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    if (favorites.includes(producto._id)) {
      setAddFavorites(true)
    }
  }



  return (
    <>
      <div className="w-full">
        <div className="pt- w-full flex flex-col lg:flex-row">
          {/* <!-- Image gallery --> */}
          <div className="mx-auto mt-6 w-full sm:px-6  lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:w-1/2">
            <div className="w-full rounded-lg">
              <img
                src={producto?.imagenes?.principal}
                alt={producto?.nombre}
                className="w-full rounded-xl object-cover object-center "
              />
            </div>
          </div>

          {/* <!-- Product info --> */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-5 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24 flex flex-col lg:w-1/2 gap-5">
            <div className=" flex flex-col justify-start w-full lg:pr-8 ">
              <h1 className="text-4xl font-bold  font-mooli text-gray-900 sm:text-3xl ">
                {producto?.nombre}
              </h1>
              <button onClick={cambiaFavorites} className="flex items-center mt-3 ">
                <HeartSvg addFavorites={addFavorites} />
              </button>
            </div>

            {/* <!-- Options --> */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-4xl mb-4 text-gray-900 font-mooli">
                ${precioFormateado}
              </p>
              {/* <!-- Reviews --> */}


              <div className=" flex flex-col lg:flex-row gap-5 font-mooli  ">
                {isInCart ? (
                  <div className="bg-slate-100 rounded-3xl  flex justify-between w-full sm:w-36 items-center">
                    <button
                      onClick={decrementar}
                      className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold rounded-full p-1 w-12 text-2xl text-center align-middle pb-2"
                    >
                      -
                    </button>
                    <span className="p-2 font-bold">{thisItem.cantidad}</span>
                    <button
                      onClick={incrementar}
                      className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold  rounded-full p-1 w-12 text-2xl text-center align-middle pb-2"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={addCart}
                    className="flex w-full items-center justify-center rounded-md border border-indigo-700  px-8 py-3 text-base font-medium text-indigo-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Agregar al carrito
                  </button>
                )}

                <button
                  onClick={buyNow}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <CartSvg /> Comprar ahora
                </button>
              </div>{" "}
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6 font-mooli">
              {/* <!-- Description and details --> */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className=" text-gray-900 text-xl whitespace-pre-wrap">
                    {
                      (producto?.descripcion !== "")
                        ? producto.descripcion
                        : producto.sinopsis
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <FeaturedProducts categoria={producto.categoria} /> */}
    </>
  );
};
