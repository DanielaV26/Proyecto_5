import { WhatsappSvg } from "./WhatsappSvg"


export const Footer = () => {
    return (
        <>
            <footer id="footerId" className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                                <img  src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1696003715/Pink_Feminine_Scented_Candle_Product_Round_Sticker_6_ls7z84.png" className="h-32 mr-3" alt="FlowBite Logo" />
                        </div>
                        <div className="grid w-full justify-around sm:flex md:flex md:grid-cols-1">
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
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between justify-center">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Brightbooks™. Todos los derechos reservados.
                        </span>
                        <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center ml-auto">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" >
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