import { Input } from "@nextui-org/react"
import { LockIcon } from "../components/LockIcon"
import { MailIcon } from "../components/MailIcon"
import { ShippingBoxSvg } from "../components/ShippingBoxSvg"
import { ShoppingBagSvg } from "../components/ShoppingBagSvg"
import { ReceiptSvg } from "../components/ReceiptSvg"

export const CheckoutUserForm = () => {
    return (
        <section className="flex gap-4 flex-col md:flex-row w-full md:w-auto">
            <form className="flex flex-col p-4 bg-white border drop-shadow-sm w-full gap-4 rounded-xl">
                <h3 className="font-semibold text-lg">Inicia sesión</h3>
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
                <a className="cursor-pointer underline ml-auto text-violet-500">Olvidé mi contraseña</a>
                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full p-2 font-semibold cursor-pointer" type="submit">
                    Iniciar sesión
                </button>
            </form>

            <form className="flex flex-col p-4 bg-white w-full gap-4 rounded-xl border drop-shadow-sm">
                <h3 className="font-semibold text-lg">Crea tu cuenta</h3>
                <p>Con tu registro, accedes a la información de tus compras y obtienes múltiples beneficios.</p>
                <ul className="italic">
                    <li className="flex"><ShippingBoxSvg/> Conoce el estado de todas tus compras</li>
                    <li className="flex"><ShoppingBagSvg/> Pide cambios, devoluciones y reembolsos.</li>
                    <li className="flex"><ReceiptSvg/> Descarga tus boletas y mucho más.</li>
                </ul>
                <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-full p-2 font-semibold cursor-pointer" type="submit">Crear mi cuenta </button>
                <hr />
                <p>También puedes <a className="underline cursor-pointer text-violet-500">comprar sin registro</a></p>
            </form>
        </section>
    )
}


