export const agregarPuntoAlPrecio = (precio = 0) => {
    // Convierte el precio a una cadena de texto
    precio = precio.toString();
  
    // Divide la cadena en partes antes y después del punto decimal (si existe)
    const partes = precio.split('.');
  
    // Obtiene la parte entera del precio
    const parteEntera = partes[0];
  
    // Inicializa una cadena para almacenar el resultado con puntos
    let resultado = '';
  
    // Itera a través de la parte entera y agrega un punto cada tres dígitos, de derecha a izquierda
    for (let i = parteEntera.length - 1, contador = 0; i >= 0; i--) {
      resultado = parteEntera[i] + resultado;
      contador++;
      if (contador === 3 && i !== 0) {
        resultado = '.' + resultado;
        contador = 0;
      }
    }
  
    // Si hay parte decimal, agrégala de nuevo al resultado
    if (partes.length === 2) {
      resultado += '.' + partes[1];
    }
  
    return resultado;
  }