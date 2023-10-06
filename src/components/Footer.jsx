import { InstagramSvg } from "./InstagramSvg"
import { WhatsappSvg } from "./WhatsappSvg"


export const Footer = () => {
    return (
        <>
            <footer id="footerId" className="bg-white dark:bg-gray-90 mt-4  ">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 font-mooli">
                    <div className="md:flex flex-col md:justify-between">
                        <div className="mb-6 md:mb-0  flex justify-center mt-10 ">
                                <img  src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696551338/brigthbook_titulo_png_bmkxc1_b8guto.png" className="h-20 mr-3" alt="Brightbooks Logo" />
                        </div>
                        <div className="grid w-full  justify-around sm:flex md:flex md:grid-cols-1 font-mooli mt-10">
                            <div>
                                <h2 className="mb-3 font-semibold text-violet-500  uppercase dark:text-white">Tienda física</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-1">
                                        <a href="https://maps.app.goo.gl/Bu2oRYe7iPPEK8Hx9" target="_blank" className="hover:text-pink-400 text-sm">5 Norte 1500, Viña del Mar, Valparaíso.</a>
                                    </li>
                                    <li>
                                        <span className="text-sm">Lunes a Sábado 10:30h - 19:30h</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 font-semibold text-violet-500 uppercase dark:text-white">Contacto</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-1">
                                        <a href="https://wa.me/+56965678219?text=HOLA"  target="_blank" className="hover:text-pink-400 text-sm">+569 6567 8219</a>
                                    </li>
                                    <li>
                                        <span className="text-sm">contacto@brightbooks.cl</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-3 font-semibold text-violet-500 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-1">
                                        <a href="#" className="hover:text-pink-400 text-sm">Términos y condiciones</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-pink-400 text-sm">Políticas de privacidad</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8 mt-6" />
                    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between justify-center">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Brightbooks™. Todos los derechos reservados.
                        </span>
                        <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center ml-auto">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://instagram.com/brightbookss?igshid=MWZjMTM2ODFkZg==" target="_blank" className="w-6 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <InstagramSvg/>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="https://wa.me/+56965678219?text=HOLA"  target="_blank" className="w-6 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <WhatsappSvg />
                                <span className="sr-only">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}