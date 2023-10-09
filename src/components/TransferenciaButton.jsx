

export const TransferenciaButton = () => {
  return (
    // <form className="p-6 bg-violet-300 border-2 rounded-lg">
    //     <div>
    //         <h1>Transferencia</h1>
    //         <ul>
    //             <li>Nombre</li>
    //             <li>Rut empresa:</li>
    //             <li>Banco</li>
    //             <li>Número de cuenta</li>
    //             <li>Enviar comprobante a:</li>
    //         </ul>
    //     </div>
    // </form>
    <div className="w-[450px] mx-auto mt-4">
<h3 className="font-semibold text-center text-lg">Datos de transferencia bancaria</h3>

    <table className="w-full rounded-xl bg-violet-200/50">
  <tbody >
    <tr >
      <td className="pl-4 ">Nombre empresa</td>
      <td>Brightbooks SPA</td>
    </tr>
    <tr>
      <td className="pl-4 ">Rut empresa</td>
      <td>78.453-279-8</td>
      
    </tr>
    <tr>
      <td className="pl-4 ">Banco</td>
      <td>Santander</td>
    </tr>
    <tr>
      <td className="pl-4 ">Tipo de cuenta</td>
      <td>Cuenta corriente</td>
    </tr>
    <tr>
      <td className="pl-4 ">Número de cuenta</td>
      <td>123456789</td>
    </tr>
    <tr>
      <td className="pl-4 ">Envío de comprobante</td>
      <td>contacto@brightbooks.cl</td>
    </tr>
  </tbody>
</table>
</div>
  )
}
