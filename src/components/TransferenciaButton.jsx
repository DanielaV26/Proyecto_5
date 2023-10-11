

export const TransferenciaButton = () => {
  return (
    <div className="min-w-[200px] mx-auto mt-4">
<h3 className="font-semibold text-center text-lg">Datos de transferencia bancaria</h3>

    <table className="w-full rounded-xl bg-violet-200/50 text-sm">
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
      <td className="pl-4 pr-4">Envío de comprobante</td>
      <td className="pr-4">contacto@brightbooks.cl</td>
    </tr>
  </tbody>
</table>
</div>
  )
}
