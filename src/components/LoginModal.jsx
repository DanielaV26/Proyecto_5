/* eslint-disable react/prop-types */

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';

export  function LoginModal({isOpen, onOpenChange}) {

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
                <Button className="" variant="flat" onPress={onClose}>
                  Cerrar
                </Button>
                <Button className="text-white font-bold bg-purple-600" onPress={onClose}>
                  Iniciar sesión
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
