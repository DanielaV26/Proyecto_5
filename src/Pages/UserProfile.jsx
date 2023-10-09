import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from 'react'
import { UserContext } from "../context/user/userContext";
import { useNavigate } from 'react-router-dom'
import axios from "axios";


export const UserProfile = () => {

  const [state] = useContext(UserContext)
  const [usuario, setUsuario] = useState(null)
  const [editForm, setEditForm] = useState(false)


  const navigate = useNavigate()
  useEffect(() => {
    if (!state.token) {
      navigate('/')
    }

  }, [])


  const decodeUser = () => {
    const token = state.token
    if (token) {
      const tokenDecodificado = jwt_decode(token)
      console.log(tokenDecodificado)
      setUsuario(tokenDecodificado)
    }
  }

  const onChangeProfileForm = (event) =>{
setUsuario({
  ...usuario,
  [event.target.name]: event.target.value
})
  }

  const submitUpdateProfile = async (event) =>{
event.preventDefault()
setEditForm(false)
const rutaBackend = 'https://proyecto5-backend-ten.vercel.app/'
try {
      const {data} = await axios.put(rutaBackend+'user/update/'+usuario._id, usuario, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      })
      console.log(data)
} catch (error) {
  alert('error')
}
  }


  useEffect(() => {
    decodeUser()
  }, [state])

  return (
    <>

      <h1 className="  h-14 mt-16  text-5xl font-cookie mx-auto bg-gradient-to-t from-violet-600 to-yellow-200 text-transparent bg-clip-text pl-16 text-center">Configuración de perfil </h1>
      <div className="flex flex-row gap-10 mt-12">
        {/* {JSON.stringify(state)} */}
        <div className=" flex flex-col items-center justify-center ">
          <img src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696872936/Captura_de_pantalla_2023-10-09_143340_qknmyk.png" alt="" />
          <h2>{usuario?.name}</h2>
          <p>{usuario?.email}</p>
          <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full w-16 mb-4 mt-2 text-base font-medium text-white " type=""> Editar</button>
        </div>

        <div className="w-full ">

          <form >
            <div className="relative z-0 w-full mb-6 group ">
              <input onChange={onChangeProfileForm} type="email" disabled={!editForm} value={usuario?.email} name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo Electronico</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              
            </div>
            <div className="relative z-0 w-full mb-6 group">
       
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={onChangeProfileForm}  type="text" disabled={!editForm}  value={usuario?.name} name="name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={onChangeProfileForm}  type="text" disabled={!editForm}  value={usuario?.lastname} name="lastname" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido</label>
              </div>
            </div>
            

            
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={onChangeProfileForm}  type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" disabled={!editForm}  value={usuario?.identification} name="identification" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° de identification</label>
                

              </div>

            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={onChangeProfileForm} value={usuario?.region} disabled={!editForm}  name="region" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Región</label>

              </div>

            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={onChangeProfileForm}  type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" disabled={!editForm}  value={usuario?.commune} name="commune" id="floating_commune" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comuna</label>

              </div>

            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input onChange={onChangeProfileForm}  type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={usuario?.address} disabled={!editForm}  name="address" id="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección</label>

              </div>

            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input onChange={onChangeProfileForm} 
                type="text"
                value={usuario?.phone}
                disabled={!editForm} 
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_region"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Teléfono
              </label>
            </div>
            <div className="flex flex-row justify-end gap-3 mt-3 ">
              {
                (editForm) ? <button onClick={submitUpdateProfile} className="flex  items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >Guardar</button>
                :  <button onClick={()=>setEditForm(true)} className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >Editar</button>
              }
            </div>
          </form>
        </div>



      </div>

    </>
  )
}
