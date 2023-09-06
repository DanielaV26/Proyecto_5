import "./Footer.css"

export const Footer = () => {
    return (
        <>
            <div className="divFooter">
                <div className="containerFooter">
                    <img className="imgFooter" src="https://res.cloudinary.com/dt7h6qci4/image/upload/v1693420100/brigthbookmorado_pfmnxz.png" alt="" />
                    <h2>"En BrightBook, cada vela es una historia, cada fragancia es un mundo. Unimos la pasión por los libros con la magia de las velas para crear un rincón de escape donde los sueños cobran vida. Únete a nuestra comunidad de soñadores y enciende tu imaginación con nosotros."</h2>

                </div>

            </div>
            <div className="itemFooter">
                <table className="footer-table">
                    <thead >
                        <tr>
                            <th>Nosotros</th>
                            <th>Legal</th>
                            <th>Contacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nuestra Historia</td>
                            <td>Términos y Condiciones</td>
                            <td>Dirección</td>
                        </tr>
                        <tr>
                            <td></td> {/* Celda vacía para la segunda columna */}
                            <td>Políticas de Privacidad</td>
                            <td></td> {/* Celda vacía para la tercera columna */}
                        </tr>
                        <tr>
                            <td></td> {/* Celda vacía para la segunda columna */}
                            <td>Políticas de Envío</td>
                            <td></td> {/* Celda vacía para la tercera columna */}
                        </tr>
                    </tbody>
                </table>

            </div>

        </>
    )
}