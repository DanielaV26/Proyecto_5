/* eslint-disable react/prop-types */

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';
import { GoogleSvg } from './GoogleSvg.jsx';
import { FacebookSvg } from "./FacebookSvg.jsx";

//Nombre, correo, contraseña, dirección, telefono

export  function RegisterModal({isOpen, onOpenChange}) {

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
              <ModalHeader className="flex flex-col gap-1">Regístrate</ModalHeader>
              <ModalBody>
                {/* Nombre */}
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Nombre"
                  placeholder="Ingresa tu nombre"
                  variant="bordered"
                  style={{
                    outline: 'none',
                    border: 'none'
                  }}
                />
                {/* Correo */}
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Ingresa tu email"
                  variant="bordered"
                  style={{
                    outline: 'none',
                    border: 'none'
                  }}
                />
                {/* Contraseña */}
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
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
                
              </ModalBody>
              <ModalFooter>
                <Button className="text-slate-600 hover:text-violet-600 font-semibold border border-violet-500 hover:scale-110" variant="flat" onPress={onClose}>
                  Registrarme
                </Button>
                <Button className="text-white font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:scale-110" onPress={onClose}>
                  Ingresar
                </Button>
              </ModalFooter>
              <hr />
              <span className="mx-auto my-2 mb-6 text-slate-600 text-sm">O bien inicia con:</span>
              <Button className="mx-16 mb-6 bg-default/40 text-slate-600 hover:text-violet-600 font-semibold border border-violet-500"> <GoogleSvg/>Inicia sesión con Google</Button>
              <Button className="mx-16 mb-6 bg-default/40 text-slate-600 hover:text-violet-600 font-semibold border border-violet-500"> <FacebookSvg/>Inicia sesión con Facebook</Button>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
