import { useContext, useState } from "react";
import { CartContext } from "../context/cart/cartContext";

/* eslint-disable react/prop-types */
export const CartItem = ({ imagen, valor, nombre, categoria, id, qty }) => {
  const [state, dispatch] = useContext(CartContext);
  const remove = () => {
    dispatch({ type: "REMOVE", payload: id });
    console.log("eliminar producto");
    console.log(id);
  };

  const [cantidad, setCantidad] = useState(qty);

  const incrementar = () => {
    const newQty = state.cartItems.map((item) => {
      /* Estamos creando un nuevo arreglo con el metodo (map) */
      if (item._id === id) {
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
    if (qty <= 1) {
      dispatch({
        type: "REMOVE" /*instruccion de quitar un producto del carrito*/,
        payload: id,
      });
      return;
    }
    const newQty = state.cartItems.map((item) => {
      if (item._id === id) {
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

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imagen}
          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{nombre}</a>
            </h3>
            <p className="ml-4">${valor}</p>
          </div>
          <p className="capitalize mt-1 text-sm text-gray-500">{categoria}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="bg-slate-100 rounded-3xl mt-2 flex justify-between w-full sm:w-24 items-center">
            <button
              onClick={decrementar}
              className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold rounded-full p-1 w-12 text-lg text-center align-middle pb-2"
            >
              -
            </button>
            <span className="p-2 font-bold text-sm">{qty}</span>
            <button
              onClick={incrementar}
              className="bg-slate-100 hover:bg-indigo-600 hover:text-white hover:font-bold  rounded-full p-1 w-12 text-lg text-center align-middle pb-2"
            >
              +
            </button>
          </div>

          <div className="flex">
            <button
              onClick={remove}
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Eliminar{" "}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
