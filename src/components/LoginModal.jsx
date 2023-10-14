/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import axios from 'axios'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon.jsx';
import { LockIcon } from './LockIcon.jsx';
import { GoogleSvg } from './GoogleSvg.jsx';
// import { FacebookSvg } from "./FacebookSvg.jsx";
import { RegisterModal } from "./RegisterModal.jsx";
import { auth, googleProvider } from "../firebase/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { saveToLS } from '../helpers/LS.js'
import { UserContext } from "../context/user/userContext.js"
import { toast } from 'react-toastify';


export  function LoginModal({isOpen, onOpenChange}) {

  const initialLoginForm = {
    email: '',
    password: ''
  }
  
  const [loginForm, setLoginForm] = useState(initialLoginForm)
  const [, dispatch] = useContext(UserContext)

  const onLoginGoogle = () => {
    signInWithPopup(auth, googleProvider).then(({user})=>{
      console.log(user)
      toast("Inicio de sesión exitoso")
    }).catch((error)=>{
      console.log(error)
    toast("No se pudo iniciar sesión")
  })
  }

  const onSubmitLoginForm = async (e, onClose) => {
    e.preventDefault()
    const rutaBackend = 'https://proyecto5-backend-ten.vercel.app/'

    try {
      const {data} = await axios.post(rutaBackend+'user/login', loginForm, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
      })
      console.log(data)
      saveToLS('token', data.token)
      dispatch({
        type: 'LOGIN',
        payload: data.token
      })
      toast("Sesión iniciada con éxito")
      setLoginForm(initialLoginForm)
      onClose()
    } catch (error) {
      console.log(error)
    }
  }
    localStorage.setItem("sesión", JSON.stringify(initialLoginForm));

  const onChangeLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    })
  }

  // const onLoginFacebook = () => {
  //   signInWithPopup(auth, facebookProvider).then(({user})=>{
  //     console.log(user)
  //     alert("Inicio de sesión exitoso")
  //   }).catch((error)=>{
  //     console.log(error)
  //   alert("No se pudo iniciar sesión")
  // })
  // }
  return (
    <>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Iniciar sesión</ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  onChange={onChangeLoginForm}
                  name='email'
                  value={loginForm.email}
                  label="Email"
                  placeholder="Ingresa tu email"
                  variant="bordered"
                  style={{
                    outline: 'none',
                    border: 'none'
                  }}
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  onChange={onChangeLoginForm}
                  name='password'
                  value={loginForm.password}
                  label="Contraseña"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  variant="bordered"
                  className="outline-none focus:border-none focus:outline-none"
                  style={{
                    outline: 'none',
                    border: 'none'
                  }}
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                  color="secondary"
                    classNames={{
                      label: "text-small" ,
                      checkbox:"bg-purple-600"
                      
                    }}
                  >
                    Recuérdame
                  </Checkbox>
                  <Link color="secondary" href="#" size="sm">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                {/* <Button className="text-slate-600 hover:text-violet-600 font-semibold border border-violet-500 hover:scale-110" variant="flat" onPress={onClose}>
                  Registrarme
                </Button> */}
                
                <RegisterModal closeLogin={onClose} />
               
                <Button onClick={(e) => onSubmitLoginForm(e, onClose)} className="text-white font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110">
                  Ingresar
                </Button>
              </ModalFooter>
              <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 my-8 bg-gray-400 rounded dark:bg-gray-700"/>
              <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                <p className="text-slate-500">o</p>
                </div>
              </div>
              <Button onClick={onLoginGoogle} className="mx-16 mb-6 bg-default/40 text-slate-600 hover:text-violet-600 font-semibold border border-violet-500"> <GoogleSvg/>Inicia sesión con Google</Button>
              {/* <Button onClick={onLoginFacebook} className="mx-16 mb-6 bg-default/40 text-slate-600 hover:text-violet-600 font-semibold border border-violet-500"> <FacebookSvg/>Inicia sesión con Facebook</Button> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
