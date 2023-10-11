/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Select,
    SelectItem,
    useDisclosure,
    Spinner
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";


import { regionesData } from "../helpers/regiones";
import { toast } from 'react-toastify';
import { UserLoginSvg } from "./UserLoginSvg.jsx";

import { PaymentContext } from "../context/payment/PaymentContext"

export const SinRegistroModal = () => {
    const initialWithoutRegisterForm = {
        name: "",
        email: "",
        country: "Chile",
        region: "",
        commune: "",
        address: "",
        phone: "",
    };
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [withoutRegisterForm, setWithoutRegisterForm] = useState(initialWithoutRegisterForm);
    const [state, dispatch] = useContext(PaymentContext)
    const [comunas, setComunas] = useState([]);
    const [regiones, setRegiones] = useState([]);

    const [isValidForm, setIsValidForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()


    const onSubmitRegister = async (e, onClose) => {
        e.preventDefault();
        if (!isValidForm) {
            toast('Debes llenar todos los campos antes de continuar')
            return
        }
    
        dispatch({
            type: 'ADD PERSONAL DATA',
            payload:  withoutRegisterForm
        })




        navigate('/checkout/delivery')

    };

    const onChangeRegion = (e) => {
        const region = e.currentKey;
        console.log(region)
        setWithoutRegisterForm({
            ...withoutRegisterForm,
            region: [region]
        });
        const comunas = regionesData.find((reg) => reg.region === region);
        setComunas(comunas.comunas);
    };

    const onChangeComuna = (e) => {
        setWithoutRegisterForm({
            ...withoutRegisterForm,
            commune: [e.currentKey]
        })
    }

    const onChangeForm = (e) => {
        setWithoutRegisterForm({
            ...withoutRegisterForm,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const valores = Object.values(withoutRegisterForm)
        const response = valores.some((x) => x === '')
        setIsValidForm(!response)
        return !response
    }

    useEffect(() => {
        setRegiones(
            regionesData.map((region) => {
                return region.region;
            })
        );
    }, []);

    useEffect(() => {
        validateForm()
    }, [withoutRegisterForm])

    return (
        <>

            <p>También puedes <a onClick={onOpen} className="underline cursor-pointer text-violet-500">comprar sin registro</a></p>


            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Ingresa tus datos
                            </ModalHeader>
                            <ModalBody>
                                {/* Nombre */}
                                <Input
                                    endContent={
                                        <UserLoginSvg className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Nombre"
                                    name="name"
                                    value={withoutRegisterForm.name}
                                    onChange={onChangeForm}
                                    placeholder="Ingresa tu nombre"
                                    variant="bordered"
                                    style={{
                                        outline: "none",
                                        border: "none",
                                    }}
                                />
                                {/* Apellido */}

                                {/* RUT */}

                                {/* Correo */}
                                <Input
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    name="email"
                                    value={withoutRegisterForm.email}
                                    onChange={onChangeForm}
                                    label="Email"
                                    placeholder="Ingresa tu email"
                                    variant="bordered"
                                    style={{
                                        outline: "none",
                                        border: "none",
                                    }}
                                />
                                {/* Contraseña */}


                                {/* Región */}
                                <div className="flex w-full max-w-xs flex-col gap-2">
                                    <Select
                                        label="Selecciona tu región"
                                        variant="bordered"
                                        placeholder=""

                                        selectedKeys={withoutRegisterForm.region}
                                        // className="max-w-xs"
                                        onSelectionChange={onChangeRegion}
                                    >
                                        {regiones.map((region) => (
                                            <SelectItem key={region} value={region}>
                                                {region}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>

                                {/* Comuna */}
                                {comunas.length === 0 ? (
                                    <></>
                                ) : (
                                    <div className="flex w-full max-w-xs flex-col gap-2">
                                        <Select
                                            label="Selecciona tu comuna"
                                            variant="bordered"
                                            placeholder=""
                                            selectedKeys={withoutRegisterForm.commune}
                                            // className="max-w-xs"
                                            onSelectionChange={onChangeComuna}
                                        >
                                            {comunas.map((commune) => (
                                                <SelectItem key={commune} value={commune}>
                                                    {commune}
                                                </SelectItem>
                                            ))}
                                        </Select>
                                    </div>
                                )}

                                {/* Dirección */}
                                {withoutRegisterForm.commune === "" ? (
                                    <></>
                                ) : (
                                    <Input
                                        endContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                        label="Dirección"
                                        name="address"
                                        value={withoutRegisterForm.address}
                                        onChange={onChangeForm}
                                        placeholder="Ingresa tu dirección"
                                        variant="bordered"
                                        style={{
                                            outline: "none",
                                            border: "none",
                                        }}
                                    />
                                )}

                                {/* Teléfono */}
                                {withoutRegisterForm.address === "" ? (
                                    <></>
                                ) : (
                                    <Input
                                        type="phone"
                                        name="phone"
                                        value={withoutRegisterForm.phone}
                                        onChange={onChangeForm}
                                        label="N° de Teléfono"
                                        placeholder="87654321"
                                        labelPlacement="outside"
                                        startContent={
                                            <div className="pointer-events-none flex items-center w-14">
                                                <span className="text-default-400 text-small">
                                                    +56 9{" "}
                                                </span>
                                            </div>
                                        }
                                    />
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    isDisabled={!isValidForm}
                                    onClick={(e) => onSubmitRegister(e, onClose)}
                                    className="text-slate-600 hover:text-violet-600 font-semibold border border-violet-500 hover:scale-110 disabled:bg-gray-300 disabled:border-gray-700"
                                    variant="flat"
                                >
                                    {
                                        (isLoading)
                                            ? <Spinner color='secondary' />
                                            : 'Continuar'
                                    }
                                </Button>

                            </ModalFooter>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
