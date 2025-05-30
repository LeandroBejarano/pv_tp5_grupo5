function generarLU(alumnos) {
    const prefijo = "APU";
    const numerosLU = alumnos.map(alumno => parseInt(alumno.lu.replace(prefijo, ''))).filter(num => !isNaN(num));
    const maxLU = numerosLU.length > 0 ? Math.max(...numerosLU) : 0;
    const nuevoNumero = maxLU + 1;
    const numeroFormateado = String(nuevoNumero).padStart(5, '0');
    return prefijo + numeroFormateado;
};

export default generarLU